import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContractsPage } from './contracts.page';

describe('ContractsPage', () => {
  let component: ContractsPage;
  let fixture: ComponentFixture<ContractsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContractsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
