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
    return this.afs.collection<Session>('sessions', ref => {
      return ref.orderBy('createdAt', 'desc');
    }).valueChanges();
  }

  getSingleSession(sessionId: string): Observable<Session> {
    return this.afs.doc<Session>(`sessions/${sessionId}`).valueChanges();
  }

  updateSession(session: Session): Promise<void> {
    return this.afs.doc<Session>(`sessions/${session.id}`).set(session, { merge: true });
  }

  async updateVote(sessionId: string, vote: string): Promise<void> {
    const userEmail = await this.getStorageItem(FirebaseService.userEmail);
    return this.afs.doc<Partial<Session>>(`sessions/${sessionId}`).set({
      currentTask: {
        currentRound: {
          [userEmail]: vote,
        }
      } as any
    }, { merge: true });
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

  async getStorageItem(key: string): Promise<string> {
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

  async closeSession(sessionId: string): Promise<void> {
    await this.afs.doc(`sessions/${sessionId}`).set({ closedAt: new Date() }, { merge: true });
  }

  async clearSessionUsers(sessionId: string): Promise<void> {
    await this.afs.doc(`sessions/${sessionId}`).set({
      currentTask: FirebaseService.emptyTask
    }, {merge: true});
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
    await this.setUser(user);
    return user;
  }
}
