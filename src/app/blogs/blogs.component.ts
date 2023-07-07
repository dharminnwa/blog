import { Component, OnInit } from '@angular/core';
import { IBlogPostApiModel } from '../shared/model/post-api-model';
import { SharedService } from '../shared/service/shared.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.sass']
})
export class BlogsComponent implements OnInit {

  blogPost:IBlogPostApiModel[] = []
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

}
