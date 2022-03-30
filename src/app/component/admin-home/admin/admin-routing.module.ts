import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '', component: AdminComponent
  },
  {
    path: 'product/create', component: AdminComponent
  },
  {
    path: 'product/update:id', component: AdminComponent
  },
  {
    path: 'product/delete:id', component: AdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
