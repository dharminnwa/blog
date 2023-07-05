import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersGridViewComponent } from './users-grid-view/users-grid-view.component';
import { UsersListViewComponent } from './users-list-view/users-list-view.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    UsersGridViewComponent,
    UsersListViewComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports:[
    UsersGridViewComponent,
    UsersListViewComponent,
  ]
})
export class UsersModule { }
