import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor() { 
    if (localStorage.getItem('check') != '1')
    {
      localStorage.setItem('Groups', JSON.stringify(this.Groups));
      localStorage.setItem('Students', JSON.stringify(this.Students));
      localStorage.setItem('check', '1');
    }
  };
  private Groups: any = [
      {number: '20-01', size: 5}, 
      {number: '20-02', size: 3}, 
      {number: '19-03', size: 4}, 
  ];
  private Students: any = {
    '20-01': [
      {date: '20.09.2020', name: 'Alexeev Peter'}, 
      {date: '10.09.2020', name: 'Anreev Andrey'}, 
      {date: '21.09.2020', name: 'Vasiliev Alex'}, 
      {date: '31.12.2019', name: 'Petrov Peter'}, 
      {date: '12.12.2018', name: 'Dennisov Dennis'}, 
    ],
    '20-02': [
      {date: '23.09.2020', name: 'Vladimir Vladimirov'}, 
      {date: '13.09.2020', name: 'Anatoly Anatoliev'}, 
      {date: '15.09.2021', name: 'Михаил Michaelov'}, 
    ],
    '19-03': [
      {date: '22.09.2021', name: 'Петров Пётр'}, 
      {date: '13.09.2020', name: 'Александров Андрей'}, 
      {date: '24.09.2022', name: 'Васильев Алесандр'}, 
      {date: '11.12.2019', name: 'Петров Петр'}, 
    ],
  };
  createGroup(numberIn: string):void{
    let grp = JSON.parse(localStorage.getItem('Groups') || '{}')
    grp.push({number: numberIn, size: 0});
    localStorage.setItem('Groups', JSON.stringify(grp));
    let stdnt = JSON.parse(localStorage.getItem('Students') || '{}')
    stdnt[numberIn] = [];
    localStorage.setItem('Students', JSON.stringify(stdnt));
    window.location.reload();
  };
  createStudent(group_id:number ,group_code:string, nameIn: string):void {
    let date_now = new Date();
    let datePipe = new DatePipe('en-US');
    let stdnt = JSON.parse(localStorage.getItem('Students') || '{}')
    stdnt[group_code].push({date: datePipe.transform(date_now, 'dd.MM.yyyy'), name: nameIn});
    
    localStorage.setItem('Students', JSON.stringify(stdnt));

    let grp = JSON.parse(localStorage.getItem('Groups') || '{}');
    grp[group_id].size++;
    localStorage.setItem('Groups', JSON.stringify(grp));
    window.location.reload();
  };
  deleteStudent(group_id:number, group_code:string, pos: number):void {
    let stdnt = JSON.parse(localStorage.getItem('Students') || '{}')
    stdnt[group_code].splice(pos, 1);
    localStorage.setItem('Students', JSON.stringify(stdnt));

    let grp = JSON.parse(localStorage.getItem('Groups') || '{}');
    grp[group_id].size--;
    localStorage.setItem('Groups', JSON.stringify(grp));
    window.location.reload();
  };
  listGroups():any  {
    return JSON.parse(localStorage.getItem('Groups') || '{}');
  };
  listStudents():any  {
    return JSON.parse(localStorage.getItem('Students') || '{}');
  };
  destroy_localstorage():void {
    localStorage.removeItem('check');
    localStorage.removeItem('Groups');
    localStorage.removeItem('Students');
    window.location.reload();
  }
}
