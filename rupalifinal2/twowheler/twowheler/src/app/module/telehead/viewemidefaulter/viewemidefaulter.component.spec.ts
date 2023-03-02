import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemidefaulterComponent } from './viewemidefaulter.component';

describe('ViewemidefaulterComponent', () => {
  let component: ViewemidefaulterComponent;
  let fixture: ComponentFixture<ViewemidefaulterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewemidefaulterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewemidefaulterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
