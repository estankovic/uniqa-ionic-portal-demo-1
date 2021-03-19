import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Session, Task, User} from '../../models/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore) { }

  getAllSessions(): Observable<Session[]> {
    return this.afs.collection<Session>('sessions').valueChanges();
  }

  getSingleSession(sessionId: string): Observable<Session> {
    return this.afs.doc<Session>(`sessions/${sessionId}`).valueChanges();
  }

  updateSession(session: Session): Promise<void> {
    return this.afs.doc<Session>(`sessions/${session.id}`).set(session, { merge: true });
  }

  async createNewTask(session: Session): Promise<void> {
    const nextTask = {...session.currentTask};
    const newSession = {
      ...session,
      tasks: [...session.tasks, nextTask],
      currentTask: {}
    } as Session;
    await this.updateSession(newSession);
  }

  async closeVoting(session: Session): Promise<void> {
    const currentTask = {...session.currentTask};
    const currentRound = {...session.currentTask.currentRound};
    const newTask = {
      ...currentTask,
      currentRound: {},
      rounds: [...currentTask.rounds, currentRound]
    } as Task;

    const newSession = {
      ...session,
      currentTask: newTask
    } as Session;
    await this.updateSession(newSession);
  }

  async createNewSession(session: Session): Promise<Session> {
    const id = this.afs.createId().substr(0, 5);
    const tempSession = {
      ...session,
      createdAt: new Date(),
      id,
      currentTask: {},
      tasks: []
    } as Session;
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
