import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {TableComponent} from './table.component'

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, RouterLink, TableComponent],
  template: `
    <p>
      students works!
    </p>
    <app-table item="as"></app-table>
    <div><a routerLink="">To_groups</a></div>
  `,
  styles: [
  ]
})
export class StudentsComponent {

}
