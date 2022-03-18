import { BookComponent } from './../book/book.component';
import { Book } from './../../model/book';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
    this.BookServiceService.currentMessage.subscribe(message => this.message = message);
    
  }

  // @Output() tukhoa = new EventEmitter();
  // index = 0;



  newMessage(keyWord: string) {
    this.BookServiceService.changeMessage(keyWord);
    this.bookComponent.ngOnInit();
  }

}
