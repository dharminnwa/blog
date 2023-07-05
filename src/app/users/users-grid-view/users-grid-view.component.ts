import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-users-grid-view',
  templateUrl: './users-grid-view.component.html',
  styleUrls: ['./users-grid-view.component.sass']
})
export class UsersGridViewComponent implements OnInit {
  users: any[] = [];

  constructor(private _sharedService: SharedService) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList() {
    this._sharedService.getUsersList().subscribe({
      next:(users) => {
        this.users = users;
      }
    })
  }

}
