import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-switcher-label',
  templateUrl: './tab-switcher-label.component.html',
  styleUrls: ['./tab-switcher-label.component.scss'],
})
export class TabSwitcherLabelComponent implements OnInit {

  @Input() label;

  @Input() hasBadge;

  @HostBinding('class.active')
  @Input() selected = false;

  @Input() id;

  constructor() { }

  ngOnInit() {}

}
