import { Component, OnInit } from '@angular/core';
import {ActionSheetController, AlertController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {FirebaseService} from '../../shared/services/firebase.service';
import {debounceTime, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {Session} from '../../models/firestore';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sm-current-task',
  templateUrl: './sm-current-task.page.html',
  styleUrls: ['./sm-current-task.page.scss'],
})
export class SmCurrentTaskPage implements OnInit {
  taskName: string;
  session$: Observable<Session> = this.activeRoute.params.pipe(
      switchMap((params) => {
        return this.firebaseService.getSingleSession(params.id);
      }),
      tap((session) => {
        this.form.get('taskName').setValue(session.currentTask.label, {
          emitEvent: false
        });
      })
  );
  form: FormGroup = new FormGroup({
    taskName: new FormControl('')
  });

  constructor(private actionSheetController: ActionSheetController,
              private alertController: AlertController,
              private activeRoute: ActivatedRoute,
              private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.form.valueChanges.pipe(
        debounceTime(1000),
        withLatestFrom(this.session$)
    ).subscribe(([form, session]) => {
      this.onTaskNameChange(form.taskName, session);
    });
  }

  async showEndAlert() {
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
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async showActions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      buttons: [{
        text: 'Close session',
        role: 'destructive',
        icon: 'lock-closed',
        handler: () => {
          console.log('Close clicked');
        }
      }, {
        text: 'Close voting round',
        role: 'destructive',
        icon: 'time',
        handler: () => {
          console.log('Close voting clicked');
        }
      }, {
        text: 'Clear users',
        icon: 'people',
        handler: () => {
          console.log('Clear users clicked');
        }
      }, {
        text: 'Start voting',
        icon: 'hourglass',
        handler: () => {
          console.log('Start voting clicked');
        }
      }, {
        text: 'New task',
        icon: 'add',
        handler: () => {
          this.showEndAlert();
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
    const userEmail = await this.firebaseService.getStorageItem(FirebaseService.userEmail);
    await this.firebaseService.updateSession({
      ...session,
      currentTask: {
        ...session.currentTask,
        currentRound: {
          [userEmail]: voteValue,
        }
      }
    });
  }
}
