import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyprocesscomponentComponent } from './applyprocesscomponent.component';

describe('ApplyprocesscomponentComponent', () => {
  let component: ApplyprocesscomponentComponent;
  let fixture: ComponentFixture<ApplyprocesscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyprocesscomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyprocesscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
