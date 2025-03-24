import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from './category/category.service';
import { SupplierService } from './supplier/supplier.service';
import {
  CATEGORY_SERVICE,
  PRODUCT_SERVICE,
  SUPPLIER_SERVICE,
} from '../constants/injection.constant';
import { ProductService } from './product/product.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    // CategoryService
    {
      provide: CATEGORY_SERVICE,
      useClass: CategoryService,
    },
    // SupplierService
    {
      provide: SUPPLIER_SERVICE,
      useClass: SupplierService,
    },
    {
      provide: PRODUCT_SERVICE,
      useClass: ProductService,
    },
  ],
})
export class ServicesModule {}
