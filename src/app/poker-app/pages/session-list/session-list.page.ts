import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
    selector: 'app-session-list',
    templateUrl: './session-list.page.html',
    styleUrls: ['./session-list.page.scss'],
})
export class SessionListPage implements OnInit {

    constructor(private firestore: AngularFirestore) {
    }

    ngOnInit() {
        this.firestore.collection('users').add({
            first: 'Ada',
            last: 'Lovelace',
            born: 1815
        })
            .then((docRef) => {
                console.log('Document written with ID: ', docRef.id);
            })
            .catch((error) => {
                console.error('Error adding document: ', error);
            });
    }

}
