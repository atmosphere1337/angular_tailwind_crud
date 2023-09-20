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
  <div class="h-screen bg-blue-900">
    <div class="ml-10 mt-10 p-5 bg-green-900 rounded-xl inline-block">
      <h1 class="text-xl text-orange-500 font-bold">
        Группа № {{groupNumber}}
      </h1>
      <app-table mode="students" [groupId]="groupId" [groupNumber]="groupNumber"></app-table>
      <div style="margin-bottom: 20px; margin-top: 20px">
        <input #addstudent class="bg-gray-500" />
        <button (click)="addStudent_fnc(addstudent)" class="bg-green-500 px-3 ml-3 rounded hover:text-yellow-500">
          Принять нового студента
        </button>
      </div>
      <div class="bg-red-900 inline-block p-1 rounded-lg hover:bg-red-500">
        <button (click)="mainService.destroy_localstorage()">
          Откатить к начальному состоянию
        </button>
      </div>
      <div class="hover:text-yellow-500">
        <a routerLink="">Назад к списку групп</a>
      </div>
    </div>
  </div>
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
