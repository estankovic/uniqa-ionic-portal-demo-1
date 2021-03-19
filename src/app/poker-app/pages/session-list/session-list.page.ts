import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Session} from '../../models/firestore';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-session-list',
    templateUrl: './session-list.page.html',
    styleUrls: ['./session-list.page.scss'],
})
export class SessionListPage implements OnInit {

    sessions: Session[] = [];

    constructor(private firestore: AngularFirestore, private alertController: AlertController, private router: Router) {
    }

    ngOnInit() {
        this.firestore.collection<Session>('sessions').valueChanges().subscribe((res) => {
            console.log(res);
            this.sessions = res;
        });
    }

    async onCreateSessionButtonClick() {
        const alert = await this.alertController.create({
            header: 'Please type name of session',
            inputs: [
                {
                    name: 'sessionName',
                    type: 'text',
                    placeholder: 'Session name'
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
                    text: 'Ok',
                    handler: () => {
                        this.router.navigate(['poker-app/sm-current-task']);
                        console.log('Confirm Ok');
                    }
                }
            ]
        });

        await alert.present();
    }
}
