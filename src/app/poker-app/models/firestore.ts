export interface User {
  email: string;
  name: string;
}

export interface Session {
  id: string; // first 6 chars of random uid
  label: string;
  ownerEmail: string;
  createdAt: Date;
  closedAt?: Date | null; // if null => active, if date => inactive
  currentTask?: Task;
  tasks?: Task[];
}

export interface Task {
  currentRound: Round;
  rounds: Round[];
  finalResult?: number;
}

export interface Round {
  [email: string]: number | null;
}


// sessions/:sessionID/ (uid) (5 characters)
// sessions/:sessionID/tasks/:taskID (uid) (firestore full id)
// sessions/:sessionID/tasks/:taskID/rounds/:roundID (integer)



