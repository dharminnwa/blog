import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/service/shared.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogPost:any[] = []
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
