import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  template: `
       <div>{{item}}</div>
       <table class="w-1/4 text-sm  text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <td *ngFor="let iter of headers_groups">{{iter}}</td>
          </tr>
        </thead>
        <tbody class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <tr *ngFor="let iter of data">
            <td> {{iter.number}} </td>
            <td> {{iter.size}} </td>
            <td> <button>Edit</button> </td>
          </tr>
        </tbody>
      </table>

      <br/>
      <input #addgroup class="bg-gray-500" />
      <button (click)="mainService.createGroup(addgroup.value)">Добавить новую группу</button>
      <br/>
      <br/>
      <div><button (click)="mainService.destroy_localstorage();">Destroy localStorage</button></div>
       <table class="w-1/4 text-sm  text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <td *ngFor="let iter of headers_students">{{iter}}</td>
          </tr>
        </thead>
        <tbody class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <tr *ngFor="let iter of data2['19-03']; let i = index">
            <td> {{iter.date}} </td>
            <td> {{iter.name}} </td>
            <td> <button (click)="mainService.deleteStudent(2, '19-03', i)">Delete</button> </td>
          </tr>
        </tbody>
      </table>

      <br/>
      <input #addstudent class="bg-gray-500" />
      <button (click)="mainService.createStudent(2, '19-03', addstudent.value)">Принять нового студента</button>
      <br/>
      <br/>
  `,
  styles: [
  ]
})
export class TableComponent {
  constructor(public mainService : MainService) {}
  @Input() item = 'default';
  data:any;
  data2:any;
  headers_groups:any = ['Номер', 'Количество студентов', 'Действия'];
  headers_students:any = ['Дата принятия', 'Фио студента', 'Действия'];
  ngOnInit() {
   this.data = this.mainService.listGroups();
   this.data2 = this.mainService.listStudents();
  }

}
