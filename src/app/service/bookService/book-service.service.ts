import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private api = 'http://localhost:8080/api/book/';
  constructor(private httpClient: HttpClient) { }

  getList(keyWord: string, page: number): Observable<any> {
    return this.httpClient.get(this.api + 'search?keyWord=' + keyWord + '&page=' + page);
  }
  
  getDetail(id: string): Observable<any>{
    return this.httpClient.get(this.api + 'detail?id=' + id);
  }

  //thư viện rxjs behavior subject
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
