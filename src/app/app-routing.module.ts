import { AdminRoutingModule } from './component/admin-home/admin/admin-routing.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { OrderComponent } from './component/order/order.component';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./component/book/book.module').then(module => module.BookRoutingModule)
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'order', component: OrderComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./component/admin-home/admin/admin-routing.module').then(module => module.AdminRoutingModule,
    )
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