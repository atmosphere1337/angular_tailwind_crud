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
      <h1 class="font-bold text-2xl">Группы университета NHTU</h1>
      <app-table mode="groups"></app-table>
      <div style="margin-bottom: 20px; margin-top: 20px">
        <input #addgroup class="bg-gray-500" />
        <button (click)="mainService.createGroup(addgroup.value)">Добавить новую группу</button>
      </div>
      <div><button (click)="mainService.destroy_localstorage();">Откатить к начальному состоянию</button></div>
  `,
  styles: [
  ]
})
export class GroupsComponent {
  constructor(public mainService : MainService) {}
}
