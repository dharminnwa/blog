import { Injectable } from '@angular/core';
import { SharedHttpService } from './shared-http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private sharedHttpService: SharedHttpService
  ) { }

  getBlogPosts(): Observable<any> {
    return this.sharedHttpService.getBlogPostApi();
  }

  getUsersList(): Observable<any> {
    return this.sharedHttpService.getUsersApi();
  }
}
