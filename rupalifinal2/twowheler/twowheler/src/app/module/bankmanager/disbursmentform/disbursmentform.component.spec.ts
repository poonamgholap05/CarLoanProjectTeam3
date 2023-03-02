import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursmentformComponent } from './disbursmentform.component';

describe('DisbursmentformComponent', () => {
  let component: DisbursmentformComponent;
  let fixture: ComponentFixture<DisbursmentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisbursmentformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisbursmentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
