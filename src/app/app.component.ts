import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Blogs';
  isUserLoggedIn: boolean = false;
  blogPost:string[];
  username:string;

  constructor(private sharedService: SharedService){
    this.sharedService.userLoggedIn();
    this.sharedService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
  });
  
  }

  ngOnInit(): void {
    this.getBlogPosts();
    this.username = localStorage.getItem('userName');
  }

  getBlogPosts() {
    this.sharedService.getBlogPosts().subscribe({
     next:(res) => {
       this.blogPost = res?.map(x=>x.title)?.slice(0, 10);
     }
    });
  }
}
