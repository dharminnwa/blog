import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/service/shared.service';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   joiningDate: Date;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', joiningDate: new Date() },
//   {position: 2, name: 'Helium', joiningDate: new Date()},
//   {position: 3, name: 'Lithium', joiningDate: new Date()},
//   {position: 4, name: 'Beryllium', joiningDate: new Date()},
//   {position: 5, name: 'Boron', joiningDate: new Date()}
// ];


@Component({
  selector: 'app-users-list-view',
  templateUrl: './users-list-view.component.html',
  styleUrls: ['./users-list-view.component.sass']
})
export class UsersListViewComponent implements OnInit {
  users: any[] = [];

  displayedColumns: string[] = ['profilePicture','name', 'position', 'joiningDate'];
  public dataSource : any;

  constructor(private _sharedService: SharedService) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList() {
    this._sharedService.getUsersList().subscribe({
      next:(users) => {
        this.dataSource = users;
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
