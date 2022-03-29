import { BookServiceService } from 'src/app/service/bookService/book-service.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  id: string = '';
  product: Book | undefined;
  img: string = '';
  quantity: number = 0;
  name: string = '';
  price: number = 0;
  author: string = '';
  publication: string = '';
  publishing_company: string = '';
  translator: string='';
  message='';
  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
  }

  getProduct() {
    this.bookService.getDetail(this.id).subscribe(data => {
      this.product = data;
      if (this.product != null) {
        this.img = data.url;
        this.quantity = data.quantity;
        this.name = data.name;
        this.price = data.price;
        this.id = data.id;
        this.author = data.author;
        this.publication = data.publication;
        this.publishing_company=data.publishing_company;
        this.translator=data.translator;
        this.message="Run Well";
      } else{
        this.message="Bug";
      }
    })
  }
  






}
