import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutCreatorComponent } from './workout-creator.component';

describe('WorkoutCreatorComponent', () => {
  let component: WorkoutCreatorComponent;
  let fixture: ComponentFixture<WorkoutCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
