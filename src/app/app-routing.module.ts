import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BookComponent } from './component/book/book.component';
import { OrderComponent } from './component/order/order.component';

const routes: Routes = [
  {
    path: 'product', component: BookComponent
    // loadChildren: () => import('./component/book/book.module').then(module => module.BookRoutingModule)
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'order', component: OrderComponent
  }
  // {
  //   path: 'about', loadChildren: () => import('./component/book/book-routing.module').then(module => module.BookRoutingModule)
  // },
  // {
  //   path: 'contact', loadChildren: () => import('./component/book/book-routing.module').then(module => module.BookRoutingModule)
  // }
]



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }