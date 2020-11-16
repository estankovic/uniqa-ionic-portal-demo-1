import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HealthInsuranceDetailPage } from './health-insurance-detail.page';

describe('HealthInsuranceDetailPage', () => {
  let component: HealthInsuranceDetailPage;
  let fixture: ComponentFixture<HealthInsuranceDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthInsuranceDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HealthInsuranceDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
