import {Component, OnInit} from '@angular/core';
import {Session} from '../../models/firestore';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {FirebaseService} from '../../shared/services/firebase.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-session-list',
    templateUrl: './session-list.page.html',
    styleUrls: ['./session-list.page.scss'],
})
export class SessionListPage implements OnInit {

    sessions$: Observable<Session[]>;

    constructor(private alertController: AlertController,
                private router: Router,
                private firebaseService: FirebaseService) {
    }

    ngOnInit() {
       this.sessions$ = this.firebaseService.getAllSessions();
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
                    handler: ({sessionName}) => {
                        if (sessionName) {
                            this.firebaseService.createNewSession(sessionName).then((session) => {
                                this.router.navigate(['poker-app/session', session.id]);
                            });
                        }
                    }
                }
            ]
        });

        await alert.present();
    }

    onShowOldChange(checked: boolean) {
        console.log(checked);
    }
}
