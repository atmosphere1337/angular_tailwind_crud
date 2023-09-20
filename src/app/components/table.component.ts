import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainService } from '../service/main.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <table class="w-1/4 text-sm  text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <td *ngFor="let iter of headers">{{iter}}</td>
        </tr>
      </thead>
      <tbody class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <ng-container *ngIf="mode == 'groups'; else thenstudent">
          <tr *ngFor="let iter of data; let i = index">
            <td> {{iter.number}} </td>
            <td> {{iter.size}} </td>
            <td> <a routerLink="students" [state]="{groupNumber: iter.number, groupIndex: i}">Edit</a> </td>
          </tr>
        </ng-container>
        <ng-template #thenstudent>
          <tr *ngFor="let iter of data2[groupNumber]; let i = index">
            <td> {{iter.date}} </td>
            <td> {{iter.name}} </td>
            <td> <button (click)="delStudent_fnc(i)">Delete</button> </td>
          </tr>
        </ng-template >
      </tbody>
    </table>
  `,
  styles: [
  ]
})
export class TableComponent {
  constructor(public mainService : MainService) { }
  @Input() mode = 'groups';
  @Input() groupId = 2;
  @Input() groupNumber = '19-03';
  data:any;
  data2:any;
  headers:any;
  headers_groups:any = ['Номер', 'Количество студентов', 'Действия'];
  headers_students:any = ['Дата принятия', 'Фио студента', 'Действия'];
  ngOnInit() {
    this.headers = this.mode == 'groups' ? this.headers_groups : this.headers_students;
    if (this.mode == 'groups')
        this.data = this.mainService.listGroups();
    else
        this.data2 = this.mainService.listStudents();
  }
  public delStudent_fnc(ind: number)
  {
      this.mainService.deleteStudent(this.groupId, this.groupNumber, ind);
  }
}
