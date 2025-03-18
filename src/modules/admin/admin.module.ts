import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';

const routes: Routes = [
  { path: 'dasboard', component: DashboardComponent },
  { path: 'category', component: CategoryListComponent },
  { path: 'supplier', component: SupplierListComponent },
  { path: '**', redirectTo: 'dasboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
