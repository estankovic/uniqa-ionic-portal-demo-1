import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';
import {Platform} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  private isMobileSizeSubject = new BehaviorSubject<boolean>(false);

  isMobileSize$ = this.isMobileSizeSubject.asObservable().pipe(
      distinctUntilChanged()
  );

  get isNative(): boolean {
    return this.platform.is('hybrid');
  }

  constructor(
      private readonly platform: Platform
  ) {

    // register resize
    // todo use injector
    window.addEventListener('resize', () => {
      this.evaluateMobileSize();
    });

  }

  init() {
    this.evaluateMobileSize();
  }

  private evaluateMobileSize() {
    const isMobileAgent = this.platform.is('mobileweb');
    const isRealMobileDevice = this.platform.is('mobile');
    const viewportWidth = this.platform.width();
    const isMobileWidth = (viewportWidth < 750);

    console.log(this.platform.platforms());

    const isMobileSize = (isMobileAgent || isRealMobileDevice) || isMobileWidth;

    this.isMobileSizeSubject.next(isMobileSize);
  }


}
