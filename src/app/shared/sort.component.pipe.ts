import { Pipe, PipeTransform } from '@angular/core';
import { HistoryComponent } from 'src/app/history/history.component';
import * as _ from 'lodash';

@Pipe({ name: 'sortBy' })
export class SortByPipe implements PipeTransform {
  transform(workouts) {
    let sortedWorkout = _.sortBy(workouts, (e, i, a) => {
      let milli = Date.parse(e.date);
      return milli;
    })
    return _.reverse(sortedWorkout);
  }
}