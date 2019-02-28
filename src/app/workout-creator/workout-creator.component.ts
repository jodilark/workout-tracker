import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Workout } from '../workout.model';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-workout-creator',
  templateUrl: './workout-creator.component.html',
  styleUrls: ['./workout-creator.component.scss']
})
export class WorkoutCreatorComponent implements OnInit {

  @Output() newWorkout = new EventEmitter<Workout>();

  type:string;
  sets:number;
  weight:number;
  reps:number;
  date:Date;
  workouts:any = [
    'squats'
  ];
  createText:string = 'create';


  constructor(private storeService:StoreService) { }

  ngOnInit() {
  }

  onChange(val) {
    this.editWorkout(val);
  }

  createWorkout(){
    const workout = new Workout();
    workout.type = this.type;
    workout.sets = this.sets;
    workout.weight = this.weight;
    workout.reps = this.reps;
    workout.date = this.date;
    this.newWorkout.emit(workout);
    this.storeService.createWorkout(workout);
    this.toHome();
  }

  editWorkout(val){
    this.storeService.editWorkout(val);
  }

  toHome(){
    window.location.href = '/home';
  }

}
