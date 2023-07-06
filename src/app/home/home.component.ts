import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/service/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogPost: any[] = [];
  cardData: any[] = [];
  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.getBlogPosts();
    this.getHomeHeaderData();
  }

  getBlogPosts() {
    this.sharedService.getBlogPosts().subscribe({
     next:(res) => {
       this.blogPost = res;
     }
    })
 }
  
 getHomeHeaderData(): void {
  this.sharedService.getHomeHeaderData().subscribe({
    next:(res) => {
      this.cardData = res;
    }
  })
 }
}
