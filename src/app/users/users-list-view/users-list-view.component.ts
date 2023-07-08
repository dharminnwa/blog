import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-users-list-view',
  templateUrl: './users-list-view.component.html',
  styleUrls: ['./users-list-view.component.sass']
})
export class UsersListViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('userSort', { static: false }) sort: MatSort;
  @Output() userCountEmit = new EventEmitter();

  dataSource: any;
  userDataList: any[] = [];

  displayedColumns: string[] = ['avatar', 'name', 'email', 'phone'];

  constructor(private _sharedService: SharedService) {
    this._sharedService.searchText.subscribe((value) => {
      if (value) {
        this.applyFilter(value)
      }
      else {
        if (this.userDataList && this.userDataList.length > 0) {
          this.dataSource = new MatTableDataSource(this.userDataList);
          this.dataSource.paginator = this.paginator;
        }
      }
    })
  }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList() {
    this._sharedService.getUsersList().subscribe({
      next: (users) => {
        this.userDataList = users;
        this.dataSource = new MatTableDataSource(users);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.userCountEmit.emit(users.length);
      }
    })
  }

  getInitials(nameString) {
    const fullName = nameString.split(' ');
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    return initials.toUpperCase();
  }

  applyFilter(value: string) {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter) || data.email.toLowerCase().includes(filter) || data.phone.toString().includes(filter);
    };

    this.dataSource.filter = value.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
