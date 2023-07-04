import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedHttpService {

  url = 'https://jsonplaceholder.typicode.com';

  constructor(
    private httpClient: HttpClient
  ) { }

  getBlogPostApi(): Observable<any> {
    return this.httpClient.get(this.url + '/posts');
  }

  getUsersApi(): Observable<any> {
    return this.httpClient.get(this.url + '/users');
  }
}
