import {Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ContentComponent implements OnInit {

  @HostBinding('attr.has-side-content')
  @Input()
  hasSideContent = false;

  @HostBinding('class.isMobile')
  get isMobile() {
    return this.platform.is('mobileweb') || this.platform.is('mobile');
  }

  constructor(private readonly platform: Platform) { }

  ngOnInit() {}

}
