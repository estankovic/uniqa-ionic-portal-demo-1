import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabSwitcherLabelComponent } from './tab-switcher-label.component';

describe('TabSwitcherLabelComponent', () => {
  let component: TabSwitcherLabelComponent;
  let fixture: ComponentFixture<TabSwitcherLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSwitcherLabelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabSwitcherLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
