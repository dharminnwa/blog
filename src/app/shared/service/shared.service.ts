import { Injectable } from '@angular/core';
import { SharedHttpService } from './shared-http.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public searchText: BehaviorSubject<string> = new BehaviorSubject("");

  constructor(
    private sharedHttpService: SharedHttpService
  ) { }

  public setSearchTextValue(searchValue: string) {
    this.searchText.next(searchValue);
  }

  getBlogPosts(): Observable<any> {
    return this.sharedHttpService.getBlogPostApi();
  }

  getUsersList(): Observable<any> {
    return this.sharedHttpService.getUsersApi();
  }

  getHomeHeaderData(): Observable<any[]> {
    return this.sharedHttpService.getHomeHeaderDataApi();
  }
}
