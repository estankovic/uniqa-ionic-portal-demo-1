import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../shared/services/firebase.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Session} from '../../models/firestore';
import {switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-session-history',
  templateUrl: './session-history.page.html',
  styleUrls: ['./session-history.page.scss'],
})
export class SessionHistoryPage implements OnInit {
  session$: Observable<Session> = this.activeRoute.params.pipe(
      switchMap((params) => {
        console.log(params);
        return this.firebaseService.getSingleSession(params.id);
      }),
    tap(console.log)
  );

  constructor(private firebaseService: FirebaseService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
