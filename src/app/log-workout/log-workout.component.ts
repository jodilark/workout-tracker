import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-workout',
  templateUrl: './log-workout.component.html',
  styleUrls: ['./log-workout.component.scss']
})
export class LogWorkoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logWorkout(){
    console.log('logging workout...');
    this.toHome();
  }

  toHome(){
    window.location.href = '/home';
  }

}
