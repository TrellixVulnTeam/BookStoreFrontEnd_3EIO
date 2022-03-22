import { AppModule } from './../../app.module';
import { HeaderComponent } from './../header/header.component';
import { Book } from './../../model/book';
import { Subscription, BehaviorSubject } from 'rxjs';
import { BookServiceService } from './../../service/bookService/book-service.service';
import { Component, OnInit, Injectable, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
// @Injectable({ providedIn: 'root' })
export class BookComponent implements OnInit {
  keyWord: string = '';
  flagsearch: boolean = true;
  subscription: Subscription | undefined;
  books: Book[] = [];
  pageable: number = 0;
  totalPages: number = 0;
  page: number = 0;
  size: number = 0;
  sortField = 'id';
  sortDirection = 'asc';
  message = '';
  message2 = '';
  check: number = 0;
  check2: number = 0;
  constructor(private BookService: BookServiceService) {
  }
  ngOnInit(): void {
    this.BookService.currentMessage.subscribe(message => { this.message = message });
    this.ShowList();
  }
  ShowList() {
    this.subscription = this.BookService.getList(this.message, this.page).subscribe(data => {
      if (data !== null) {
        this.books = data['content'];
        console.log(this.books);
        console.log(this.message);
        this.totalPages = data.totalPages;
        this.size = data.size;
        this.pageable = data.pageable;
        this.message2 = 'alo listBook ok';
      } else {
        this.message2 = 'not found !!!'
      }
    })
  }
  // dem =0;
  //   hienthitukhoa(dem: number){
  //     console.log(dem);

  //   }
  reFresh(keyWord: string) {
    this.BookService.changeMessage(keyWord);
    this.page = 0;
    this.ngOnInit();
  }



  //Phan trang
  loadMore(index: number) {
    this.check2 = this.page + index;
    if (this.check2 < this.size / 3) {
      this.page = this.check2;
      this.ngOnInit();
    }
  }
  loadBack(index: number) {
    this.check = this.page - index;
    if (this.check >= 0) {
      this.page = this.check;
      this.ngOnInit();
    }
  }
} 
