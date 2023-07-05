import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/service/shared.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  isGridView: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
}
