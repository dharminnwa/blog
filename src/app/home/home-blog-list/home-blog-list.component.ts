import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-home-blog-list',
  templateUrl: './home-blog-list.component.html',
  styleUrls: ['./home-blog-list.component.sass']
})
export class HomeBlogListComponent implements OnInit {
 
  blogPost: any[] = [];

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.getBlogPosts();
  }
 
  getBlogPosts() {
    this.sharedService.getBlogPosts().subscribe({
     next:(res) => {
       this.blogPost = res;
     }
    })
 }
}
