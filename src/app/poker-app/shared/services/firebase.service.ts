import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Session, Task, User} from '../../models/firestore';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  static userEmail = 'userEmail';
  static userName = 'username';
  static emptyTask: Task = {
    rounds: [],
    currentRound: {},
    label: 'New Task'
  };

  constructor(private afs: AngularFirestore) {
  }

  getAllSessions(): Observable<Session[]> {
    return this.afs.collection<Session>('sessions').valueChanges();
  }

  getSingleSession(sessionId: string): Observable<Session> {
    return this.afs.doc<Session>(`sessions/${sessionId}`).valueChanges();
  }

  updateSession(session: Session): Promise<void> {
    return this.afs.doc<Session>(`sessions/${session.id}`).set(session, { merge: true });
  }

  async setUser(user: User): Promise<void> {
    console.log(user);
    await Storage.set({
      key: 'username',
      value: user.name
    });
    await Storage.set({
      key: 'userEmail',
      value: user.email
    });
  }

  async getStorageItem(key: string) {
    const { value } = await Storage.get({ key });
    return value;
  }

  async createNewTask(session: Session): Promise<void> {
    const nextTask = {...session.currentTask};
    const newSession: Session = {
      ...session,
      tasks: [...session.tasks, nextTask],
      currentTask: FirebaseService.emptyTask
    };
    await this.updateSession(newSession);
  }

  async closeVoting(session: Session): Promise<void> {
    const currentTask = {...session.currentTask};
    const currentRound = {...session.currentTask.currentRound};
    const newTask: Task = {
      ...currentTask,
      currentRound: {},
      rounds: [...currentTask.rounds, currentRound]
    };

    const newSession: Session = {
      ...session,
      currentTask: newTask
    };
    await this.updateSession(newSession);
  }

  async createNewSession(label: string): Promise<Session> {
    const id = this.afs.createId().substr(0, 5);
    const userEmail = await this.getStorageItem(FirebaseService.userEmail);
    const tempSession: Session = {
      label,
      createdAt: new Date(),
      id,
      currentTask: FirebaseService.emptyTask,
      tasks: [],
      ownerEmail: userEmail
    };
    await this.afs.doc<Session>(`sessions/${id}`).set(tempSession);
    return tempSession;
  }

  async createNewUser(user: User): Promise<User> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.email}`);
    await userRef.set(user);
    return user;
  }

  // getAllInactiveSessions(): Observable<Session[]> {
  //   return this.afs.collection<Session>('sessions', ref => {
  //     return ref.where('closedAt', '!=', null)
  //         .where('label', '==', 'email');
  //   }).valueChanges();
  // }
}
