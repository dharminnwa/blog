import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/service/shared.service';
import { IBlogPostApiModel } from '../shared/model/post-api-model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.sass']
})
export class BlogsComponent implements OnInit {

  blogPost:IBlogPostApiModel[] = []
  isExpanded:boolean = false;

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
       this.blogPost.forEach((post) => { 
        post.isExpanded = false;
        post.maxHeight = '35px';
      })
     }
    })
 }

 toggleAccordion(): void {
  this.isExpanded = !this.isExpanded;
}

togglePost(post: any): void {
  post.isExpanded = !post.isExpanded;
}
}
