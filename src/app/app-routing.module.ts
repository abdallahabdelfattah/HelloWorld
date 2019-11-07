import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { NoFoundComponent } from './no-found/no-found.component';


const routes: Routes = [
  {path:"", component:HomeComponent}, 
  {path:"Student/:Id", component:StudentComponent},
  {path:"Home", component:HomeComponent} ,
  {path:"**", component:NoFoundComponent} ,
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
