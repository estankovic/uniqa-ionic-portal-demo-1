import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {FirebaseService} from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {

  constructor(private readonly service: FirebaseService, private readonly router: Router) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const username = await this.service.getStorageItem(FirebaseService.userEmail);
    const isLoggedIn = !!username;

    if (isLoggedIn) {
      return true;
    }

    const queryParams = {
      redirect: state.url
    };

    this.router.navigate(['poker-app', 'welcome'], {queryParams});
  }
}
