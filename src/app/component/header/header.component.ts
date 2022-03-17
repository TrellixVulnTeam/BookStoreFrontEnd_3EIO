import { BookComponent } from './../book/book.component';
import { Book } from './../../model/book';
import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyWord: string = "";
  pageable: number = 0;
  totalPages: number = 0;
  page: number = 0;
  size: number = 0;
  books: Book[] = [];
  private subscribe: Subscription | undefined;
  message = '';
  
  constructor(private BookServiceService: BookServiceService, private bookComponent: BookComponent) { }


  ngOnInit(): void {
    //  this.Book.getList(this.keyWord,this.pageNum);
    // console.log(this.Book.getList(this.keyWord,this.pageNum));
  }

  ngOnsubmit(keyWord: string) {
    this.bookComponent.keyWord = keyWord;
    console.log(this.bookComponent.keyWord);
    // this.bookComponent.checkKeyWord();
    this.bookComponent.ngOnInit();
    
  }
  // searchField() {
  //   this.subscribe = this.BookServiceService.getList(this.keyWord, this.page).subscribe(data => {
  //     if (data !== null) {
  //       this.keyWord = data['content'];
  //       this.totalPages = data['totalPages'];
  //       this.size = data['size'];
  //       this.pageable = data['pageable'].pageable;
  //       this.message = 'aloo ok'

  //     } else {
  //       this.message = 'not found !!!'
  //     }
  //   });
  // }
}
