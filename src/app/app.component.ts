import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'blogging-app';
  isUserLoggedIn: boolean = false;

  constructor(private sharedService: SharedService){
    this.sharedService.userLoggedIn();
    this.sharedService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
  });
  
  }

  ngOnInit(): void {
  
  }
}
