import {Component, Inject, OnInit} from '@angular/core';
import {ActionSheetController, AlertController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../../shared/services/firebase.service';
import {debounceTime, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {Session} from '../../models/firestore';
import {combineLatest, Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {fromPromise} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-sm-current-task',
  templateUrl: './sm-current-task.page.html',
  styleUrls: ['./sm-current-task.page.scss'],
})
export class SmCurrentTaskPage implements OnInit {
  taskName: string;
  userEmail: string;
  session$: Observable<Session> = this.activeRoute.params.pipe(
      switchMap((params) => {
        return this.firebaseService.getSingleSession(params.id);
      }),
      tap((session) => {
        this.form.get('taskName').setValue(session.currentTask.label, {
          emitEvent: false
        });
      }),
      tap((session) => {
        if (session.closedAt) {
          // TODO: change link
          this.router.navigate(['poker-app']);
        }
      })
  );

  isOwner$ = combineLatest([
    fromPromise(this.firebaseService.getStorageItem(FirebaseService.userEmail)),
    this.session$
  ]).pipe(
    map(([storedEmail, session]) => {
      return storedEmail === session.ownerEmail;
    }),
  );


  form: FormGroup = new FormGroup({
    taskName: new FormControl('')
  });

  constructor(private actionSheetController: ActionSheetController,
              private alertController: AlertController,
              private activeRoute: ActivatedRoute,
              private router: Router,
              private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getStorageItem(FirebaseService.userEmail).then(user => {
      this.userEmail = user;
    });
    this.form.valueChanges.pipe(
        debounceTime(1000),
        withLatestFrom(this.session$)
    ).subscribe(([form, session]) => {
      this.onTaskNameChange(form.taskName, session);
    });
  }

  async showEndAlert(session: Session) {
    const alert = await this.alertController.create({
      header: 'What was the final result',
      inputs: [
        {
          name: 'finalResult',
          type: 'number',
          placeholder: '0'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: (finalResult) => {
            const tempSession = {
              ...session,
              currentTask: {
                ...session.currentTask,
                finalResult
              }
            } as Session;
            this.firebaseService.createNewTask(tempSession);
          }
        }
      ]
    });

    await alert.present();
  }

  async showActions(session: Session) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      buttons: [{
        text: 'Close session',
        role: 'destructive',
        icon: 'lock-closed',
        handler: () => {
          this.firebaseService.closeSession(session.id);
        }
      }, {
        text: 'Close voting round',
        role: 'destructive',
        icon: 'time',
        handler: () => {
          this.firebaseService.closeVoting(session);
        }
      }, {
        text: 'Clear users',
        icon: 'people',
        handler: () => {
          this.firebaseService.clearSessionUsers(session.id);
        }
      }, {
        text: 'New task',
        icon: 'add',
        handler: () => {
          this.showEndAlert(session);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  onTaskNameChange(newName: string, session: Session) {
    this.firebaseService.updateSession({
      ...session,
      currentTask: {
        ...session.currentTask,
        label: newName
      }
    });
  }

  async onVoteChange(voteValue: string, session: Session) {
    await this.firebaseService.updateVote(session.id, voteValue);
  }
}
