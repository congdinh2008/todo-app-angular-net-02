import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from './category/category.service';
import { SupplierService } from './supplier/supplier.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    // CategoryService
    {
      provide: 'ICategoryService',
      useClass: CategoryService
    },
    // SupplierService
    {
      provide: 'ISupplierService',
      useClass: SupplierService
    }
  ]
})
export class ServicesModule { }
