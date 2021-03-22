import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmCurrentTaskPage } from './sm-current-task.page';

describe('SmCurrentTaskPage', () => {
  let component: SmCurrentTaskPage;
  let fixture: ComponentFixture<SmCurrentTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmCurrentTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmCurrentTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
