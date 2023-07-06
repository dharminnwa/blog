import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedHttpService {

  url = 'https://jsonplaceholder.typicode.com';

  homecardData: any[] = [
    [{
      "total": 365,
      "description": "Total Orderes"
    },
    {
      "total": 365,
      "description": "Total Expenses"
    },
    {
      "total": 365,
      "description": "Total Revenue"
    },
    {
      "total": 365,
      "description": "New Users"
    },
    ]
  ]

  constructor(
    private httpClient: HttpClient
  ) { }

  getBlogPostApi(): Observable<any> {
    return this.httpClient.get(this.url + '/posts');
  }

  getUsersApi(): Observable<any> {
    return this.httpClient.get(this.url + '/users');
  }

  getHomeHeaderDataApi(): Observable<any[]> {
    return from(this.homecardData);
  }
}
