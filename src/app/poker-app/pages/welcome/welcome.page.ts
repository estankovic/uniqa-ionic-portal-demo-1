import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {uniqaMailValidator} from './validator';
import {FirebaseService} from '../../shared/services/firebase.service';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.page.html',
    styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

    loginForm: FormGroup;
    router: Router;
    firebaseService: FirebaseService;

    constructor(
      private fb: FormBuilder,
      private rt: Router,
      private fbs: FirebaseService,
      private route: ActivatedRoute,
    ) {
        this.loginForm = fb.group({
            email: new FormControl('', uniqaMailValidator()),
            name: new FormControl('', Validators.required)
        });
        this.router = rt;
        this.firebaseService = fbs;
    }

    ngOnInit() {
    }

    async submit() {
        await this.firebaseService.createNewUser({
            email: this.loginForm.controls.email.value,
            name: this.loginForm.controls.name.value
        });

        const redirect = this.route.snapshot.queryParams.redirect;

        this.router.navigate(redirect ? [decodeURIComponent(redirect)] : ['/poker-app']);
    }

}
