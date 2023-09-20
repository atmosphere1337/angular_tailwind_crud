import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainService } from '../service/main.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <div class="my-3">
    <table class="text-gray-400">
      <thead class="text-center uppercase  bg-gray-700 text-gray-400">
        <tr>
          <td *ngFor="let iter of headers" class="px-3">{{iter}}</td>
        </tr>
      </thead>
      <tbody class="border-b bg-gray-800 border-gray-700">
        <ng-container *ngIf="mode == 'groups'; else thenstudent">
          <tr *ngFor="let iter of data; let i = index">
            <td> {{iter.number}} </td>
            <td> {{iter.size}} </td>
            <td class="hover:text-yellow-500">
              <a routerLink="students" [state]="{groupNumber: iter.number, groupIndex: i}">Edit</a> 
            </td>
          </tr>
        </ng-container>
        <ng-template #thenstudent>
          <tr *ngFor="let iter of data2[groupNumber]; let i = index">
            <td> {{iter.date}} </td>
            <td> {{iter.name}} </td>
            <td class="hover:text-yellow-500"> 
              <button (click)="delStudent_fnc(i)">Delete</button>
            </td>
          </tr>
        </ng-template >
      </tbody>
    </table>
  </div>
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
