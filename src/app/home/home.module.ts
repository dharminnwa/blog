import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeBlogListComponent } from './home-blog-list/home-blog-list.component';
import { HomeSummaryComponent } from './home-summary/home-summary.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeBlogListComponent,
    HomeSummaryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
