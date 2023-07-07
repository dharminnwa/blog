import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-home-summary',
  templateUrl: './home-summary.component.html',
  styleUrls: ['./home-summary.component.sass']
})
export class HomeSummaryComponent implements OnInit {
 
  cardData: any[] = [];

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.getHomeHeaderData();
  }
  
  getHomeHeaderData(): void {
    this.sharedService.getHomeHeaderData().subscribe({
      next:(res) => {
        this.cardData = res;
      }
    })
   }
}
