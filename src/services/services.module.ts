import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from './category/category.service';
import { SupplierService } from './supplier/supplier.service';
import { CATEGORY_SERVICE, SUPPLIER_SERVICE } from '../constants/injection.constant';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    // CategoryService
    {
      provide: CATEGORY_SERVICE,
      useClass: CategoryService
    },
    // SupplierService
    {
      provide: SUPPLIER_SERVICE,
      useClass: SupplierService
    }
  ]
})
export class ServicesModule { }
