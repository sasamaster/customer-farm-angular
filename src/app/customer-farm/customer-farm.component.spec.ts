import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFarmComponent } from './customer-farm.component';

describe('CustomerFarmComponent', () => {
  let component: CustomerFarmComponent;
  let fixture: ComponentFixture<CustomerFarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
