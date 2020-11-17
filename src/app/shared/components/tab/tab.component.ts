import {AfterContentInit, AfterViewChecked, Component, HostBinding, Input, OnInit} from '@angular/core';

let globalId = 0;


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  // tslint:disable-next-line:variable-name
  private _selected = false;

  // tslint:disable-next-line:variable-name
  private _disabled = false;

  private loaded = false;

  public readonly id = `tab-panel-${globalId++}`;

  @Input() label = '';

  @Input() hasBadge = false;

  @Input()
  @HostBinding('class.visible')
  set selected(value: boolean) {
    this._selected = value;

    if (!this.loaded) {
      // detect changes
    }

    this.loaded = true;
  }

  get selected() {
    return this._selected;
  }

  constructor() { }
}
