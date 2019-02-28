import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  url = 'http://localhost:8010/api/';

  workouts:any = [];

  constructor(private http:HttpClient) { }

  getWorkout(id){
    return this.http.get(this.url + 'workout', id).toPromise()
    .then(response => {
      return response;
    });
  }

  getWorkouts(){
    return this.http.get(this.url + 'workout').toPromise()
    .then(response => {
      return response;
    });
  }

  createWorkout(workout){
    this.http.post(this.url + 'createWorkout', workout).toPromise();
  }

  editWorkout(workoutName:string){
    debugger
    this.getWorkouts().then(res => {
      debugger
      let foo = _.filter(res, (e, i) => {
        debugger
        if(e.type === workoutName){
          return i;
        }
      });
    });
  }
}
