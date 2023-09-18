import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TableComponent } from './table.component';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [CommonModule, RouterLink, TableComponent],
  template: `
      <h1 class="font-bold text-2xl">Main</h1>
      <div>groups works!</div>
      <app-table item="we can"></app-table>
      <div><a routerLink="students">To_students</a></div>
  `,
  styles: [
  ]
})
export class GroupsComponent {

}
