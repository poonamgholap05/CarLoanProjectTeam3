import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerviewbmComponent } from './customerviewbm.component';

describe('CustomerviewbmComponent', () => {
  let component: CustomerviewbmComponent;
  let fixture: ComponentFixture<CustomerviewbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerviewbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerviewbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
