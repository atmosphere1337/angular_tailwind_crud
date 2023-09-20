import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {TableComponent} from './table.component'
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, RouterLink, TableComponent],
  template: `
    <h1>
      Группа № {{groupNumber}}
    </h1>
      <app-table mode="students" [groupId]="groupId" [groupNumber]="groupNumber"></app-table>

      <div style="margin-bottom: 20px; margin-top: 20px">
        <input #addstudent class="bg-gray-500" />
        <button (click)="addStudent_fnc(addstudent)">Принять нового студента</button>
      </div>
      <div><button (click)="mainService.destroy_localstorage()">Откатить к начальному состоянию</button></div>
    <div><a routerLink="">To_groups</a></div>
  `,
  styles: [
  ]
})
export class StudentsComponent {
  constructor(public mainService : MainService) {}
  groupId:number = 0;
  groupNumber:string = '';
  ngOnInit() {
      this.groupId = window.history.state.groupIndex;     
      this.groupNumber = window.history.state.groupNumber;
  }
  public addStudent_fnc(addstudent_field:any) {
      this.mainService.createStudent(this.groupId, this.groupNumber, addstudent_field.value);
  }
}
