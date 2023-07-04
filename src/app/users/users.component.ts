import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/service/shared.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList() {
    this.sharedService.getUsersList().subscribe({
      next:(users) => {
        this.users = users;
      }
    })
  }

}
