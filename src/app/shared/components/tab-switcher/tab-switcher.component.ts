import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {ITabSwitcher} from './tab-switcher.interface';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-tab-switcher',
  templateUrl: './tab-switcher.component.html',
  styleUrls: ['./tab-switcher.component.scss'],
})
export class TabSwitcherComponent implements ITabSwitcher {

  currentIndexSubject = new BehaviorSubject<number>(0);

  currentIndex: Observable<number> = this.currentIndexSubject.asObservable();

  @Output() indexChanged = new EventEmitter<number>();

  @HostBinding('class.condense')
  @Input() condense = false;

  constructor() { }

  activateIndex(index: number): void {
    this.currentIndexSubject.next(index);
    this.indexChanged.emit(index);
  }


}
