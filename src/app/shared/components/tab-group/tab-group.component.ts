import {
  AfterContentInit,
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter, HostBinding,
  Input,
  OnInit, Output,
  QueryList
} from '@angular/core';
import {TabComponent} from '../tab/tab.component';
import {ITabSwitcher} from '../tab-switcher/tab-switcher.interface';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
})
export class TabGroupComponent implements AfterContentInit, AfterViewChecked {

  @ContentChildren(TabComponent) tabPanels: QueryList<TabComponent>;

  tabs: TabComponent[] = [];

  // tslint:disable-next-line:variable-name
  private _activeIndex: number;

  private tabChanged: boolean;

  private preventActiveIndexPropagation: boolean;

  @Output() activeIndexChange: EventEmitter<number> = new EventEmitter();

  @HostBinding('class.condense')
  @Input() condense = false;

  @Input() showTabs = true;

  @Input() controller: ITabSwitcher;

  @Input() get activeIndex() {
    return this._activeIndex;
  }


  set activeIndex(value: number) {
    this._activeIndex = value;

    if (this.preventActiveIndexPropagation) {
      this.preventActiveIndexPropagation = false;
      return;
    }

    if (this.tabs && this.tabs.length && this._activeIndex != null && this.tabs.length > this._activeIndex) {
      this.findSelectedTab().selected = false;
      this.tabs[this._activeIndex].selected = true;
    }
  }

  constructor(
      private readonly cd: ChangeDetectorRef
  ) { }

  ngAfterContentInit() {
    this.initTabs();

    this.tabPanels.changes.subscribe(() => {
      this.initTabs();
    });
  }

  ngAfterViewChecked() {
    console.log('tg', this.controller)
    if (this.controller) {
      this.controller.currentIndex.subscribe(index => {
        this.activeIndex = index;
      });
    }
  }

  private initTabs() {
    this.tabs = this.tabPanels.toArray();
    const selectedTab = this.findSelectedTab();

    if (!selectedTab && this.tabs.length) {
      if (this.activeIndex != null && this.tabs.length > this.activeIndex) {
        this.tabs[this.activeIndex].selected = true;
      }
      else {
        this.tabs[0].selected = true;
      }

      this.tabChanged = true;
    }


    this.cd.markForCheck();
  }

  private findSelectedTab() {
    return this.tabs.find(tab => tab.selected);
  }

  private findTabIndex(tab: TabComponent) {
    return this.tabs.findIndex(t => t === tab);
  }

  open(event: Event, tab: TabComponent) {

    if (!tab.selected) {
      const selectedTab: TabComponent = this.findSelectedTab();
      if (selectedTab) {
        selectedTab.selected = false;
      }

      this.tabChanged = true;
      tab.selected = true;
      const selectedTabIndex = this.findTabIndex(tab);
      this.preventActiveIndexPropagation = true;
      this.activeIndexChange.emit(selectedTabIndex);
      // this.onChange.emit({originalEvent: event, index: selectedTabIndex});
    }

    if (event) {
      event.preventDefault();
    }
  }

}
