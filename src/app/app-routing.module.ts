import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutCreatorComponent } from 'src/app/workout-creator/workout-creator.component';
import { HomeComponent } from 'src/app/home/home.component';
import { CreateUserComponent } from 'src/app/create-user/create-user.component';
import { LogWorkoutComponent } from 'src/app/log-workout/log-workout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-workout', component: WorkoutCreatorComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'log-workout', component: LogWorkoutComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
