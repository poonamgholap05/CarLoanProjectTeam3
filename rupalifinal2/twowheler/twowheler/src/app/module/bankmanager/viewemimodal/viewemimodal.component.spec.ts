import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemimodalComponent } from './viewemimodal.component';

describe('ViewemimodalComponent', () => {
  let component: ViewemimodalComponent;
  let fixture: ComponentFixture<ViewemimodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewemimodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewemimodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
