import { Component, OnInit } from '@angular/core';
import {ActionSheetController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-sm-current-task',
  templateUrl: './sm-current-task.page.html',
  styleUrls: ['./sm-current-task.page.scss'],
})
export class SmCurrentTaskPage implements OnInit {
  taskName: string;

  constructor(private actionSheetController: ActionSheetController, private alertController: AlertController) { }

  ngOnInit() {
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

  onTaskNameChange($event: any) {
    console.log($event.detail.value);
  }
}
