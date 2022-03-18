import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './component/book/book.component';
import { CustomerComponent } from './component/customer/customer.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { OrderComponent } from './component/order/order.component';
import { OrderdetailComponent } from './component/orderdetail/orderdetail.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CustomerComponent,
    EmployeeComponent,
    OrderComponent,
    OrderdetailComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    BookComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
