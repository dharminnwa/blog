import { Injectable } from '@angular/core';
import { SharedHttpService } from './shared-http.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(
    private sharedHttpService: SharedHttpService
  ) { }

  getBlogPosts(): Observable<any> {
    return this.sharedHttpService.getBlogPostApi();
  }

  getUsersList(): Observable<any> {
    return this.sharedHttpService.getUsersApi();
  }

  getHomeHeaderData(): Observable<any[]> {
    return this.sharedHttpService.getHomeHeaderDataApi();
  }

  userLoggedIn(): void {
    if(localStorage.getItem('token')!== null){
      this.isUserLoggedIn.next(true);
    } else {
      this.isUserLoggedIn.next(false);
    }
  }
}
