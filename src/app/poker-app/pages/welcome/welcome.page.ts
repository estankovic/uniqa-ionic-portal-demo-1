import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {uniqaMailValidator} from "./validator";

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.page.html',
    styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

    loginForm: FormGroup;
    router: Router;

    constructor(private fb: FormBuilder, private rt: Router) {
        this.loginForm = fb.group({
            email: new FormControl('', uniqaMailValidator()),
            name: new FormControl('', Validators.required)
        });
        this.router = rt;
    }

    ngOnInit() {
    }

    submit() {
        console.log('name: ', this.loginForm.controls.name.value);
        console.log('email: ', this.loginForm.controls.email.value);
        //TODO: save into localStorage, call firebase
        this.router.navigate(['/poker-app']);
    }

}
