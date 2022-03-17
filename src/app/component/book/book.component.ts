import { AppModule } from './../../app.module';
import { HeaderComponent } from './../header/header.component';
import { Book } from './../../model/book';
import { Subscription } from 'rxjs';
import { BookServiceService } from './../../service/bookService/book-service.service';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
@Injectable({providedIn: 'root'})
export class BookComponent implements OnInit {
  keyWord: string = "";
  flagsearch = true;
  subscription: Subscription | undefined
  books: Book[] = [];
  pageable: number = 0;
  totalPages: number = 0;
  page: number = 0;
  size: number = 0;
  sortField = 'id';
  sortDirection = 'asc';
  message = '';
  check: number = 0;
  check2: number = 0;

  constructor(private BookService: BookServiceService) { }

  ngOnInit(): void {
    this.checkKeyWord();
  }

  checkKeyWord() {
    if (this.keyWord === '') {
      this.showList(this.keyWord,this.page);
    } else{
      this.page=0;
      this.showList(this.keyWord,this.page);
    }
  }
  showList(keyWord: string, page: number) {
    this.subscription = this.BookService.getList(this.keyWord, page).subscribe(data => {
 
      
      if (data !== null) {
        this.books = data['content'];
        console.log(this.books);
        
        this.totalPages = data['totalPages'];
        this.size = data['size'];
        this.pageable = data['pageable'].pageable;
        this.message = 'alo listBook ok'
      } else {
        this.message = 'not found !!!'
      }
    })
  }

  loadMore(index: number) {
    this.check2 = this.page + index;
    if (this.check2 < this.size / 2) {
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
