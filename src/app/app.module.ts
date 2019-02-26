import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HistoryComponent } from './history/history.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkoutCreatorComponent } from './workout-creator/workout-creator.component';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LogWorkoutComponent } from './log-workout/log-workout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HistoryComponent,
    WorkoutCreatorComponent,
    HomeComponent,
    CreateUserComponent,
    LogWorkoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
