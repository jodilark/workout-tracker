import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  workouts:any = [
    {
      type:'Bench',
      sets: 5,
      weight: 45,
      reps: 5,
      date: new Date().toLocaleDateString()
    },
    {
      type:'squats',
      sets: 5,
      weight: 10,
      reps: 8,
      date: '4/26/2018'
    },
    {
      type:'Dumbbell shoulder press',
      sets: 2,
      weight: 15,
      reps: 5,
      date: '2/26/2019'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
