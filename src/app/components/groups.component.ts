import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TableComponent } from './table.component';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [CommonModule, RouterLink, TableComponent],
  template: `
  <div class="h-screen bg-blue-900">
    <div class="ml-10 mt-10 p-5 bg-green-900 rounded-xl inline-block">
      <h1 class="text-xl text-orange-500 font-bold">
        Группы университета NHTU
      </h1>
      <app-table mode="groups"></app-table>
      <div style="margin-bottom: 20px; margin-top: 20px">
        <input #addgroup class="bg-gray-500" />
        <button (click)="mainService.createGroup(addgroup.value)" class="bg-green-500 px-3 ml-3 rounded hover:text-yellow-500">
          Добавить новую группу
        </button>
      </div>
      <div>
        <button class="bg-red-900 inline-block p-1 rounded-lg hover:bg-red-500" (click)="mainService.destroy_localstorage();">
          Откатить к начальному состоянию
        </button>
      </div>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class GroupsComponent {
  constructor(public mainService : MainService) {}
}
