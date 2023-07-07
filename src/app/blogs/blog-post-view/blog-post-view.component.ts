import { Component, OnInit, Input } from '@angular/core';
import { IBlogPostApiModel } from 'src/app/shared/model/post-api-model';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html',
  styleUrls: ['./blog-post-view.component.sass']
})
export class BlogPostViewComponent implements OnInit {
  @Input('blogPost')blogPost:IBlogPostApiModel[] = []
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
