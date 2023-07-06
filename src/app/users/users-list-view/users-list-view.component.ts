import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'src/app/shared/service/shared.service';

/* Static data */ 
export interface PeriodicElement {
  name: string;
  position: string;
  email: string;
  joiningDate: Date;
  avatar:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'George Bluth', position: "Junior developer", email:"emma.wong@reqres.in", joiningDate : new Date("2022-05-03"),   avatar:"https://reqres.in/img/faces/1-image.jpg" },
  { name: 'Janet Weaver', position: "Senior developer", email:"janet.weaver@reqres.in",  joiningDate : new Date("2022-05-03"), avatar:"https://reqres.in/img/faces/2-image.jpg" },
  { name: 'Emma Wong', position: "Project Manger", email:"emma.wong@reqres.in", joiningDate: new Date("2022-05-03"), avatar:"https://reqres.in/img/faces/3-image.jpg" }  
];

@Component({
  selector: 'app-users-list-view',
  templateUrl: './users-list-view.component.html',
  styleUrls: ['./users-list-view.component.sass']
})
export class UsersListViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  users: any[] = [];

  displayedColumns: string[] = ['avatar','name', 'position', 'joiningDate'];

  constructor(private _sharedService: SharedService) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList() {
    this._sharedService.getUsersList().subscribe({
      next:(users) => {

       debugger;
        //this.dataSource = data as Object;
        //this.dataSource.totalRecords = this.dataSource.length;
        this.dataSource.paginator = this.paginator;
        this.users = users;
      }
    })
  }

  getInitials(nameString) {
    const fullName = nameString.split(' ');
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    return initials.toUpperCase();
  }
}
