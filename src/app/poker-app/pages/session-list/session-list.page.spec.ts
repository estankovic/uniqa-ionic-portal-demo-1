import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionListPage } from './session-list.page';

describe('SessionListPage', () => {
  let component: SessionListPage;
  let fixture: ComponentFixture<SessionListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
