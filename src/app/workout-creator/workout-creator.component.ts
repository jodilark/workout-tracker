import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-creator',
  templateUrl: './workout-creator.component.html',
  styleUrls: ['./workout-creator.component.scss']
})
export class WorkoutCreatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createWorkout(){
    console.log('creating workout...');
    this.toHome();
  }

  toHome(){
    window.location.href = '/home';
  }

}
