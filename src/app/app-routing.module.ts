import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GroupsComponent} from './components/groups.component';
import {StudentsComponent} from './components/students.component';

const routes: Routes = [
  {path: '', component: GroupsComponent},
  {path: 'students', component: StudentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
