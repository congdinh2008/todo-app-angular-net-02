import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from './category/category.service';



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
    }
  ]
})
export class ServicesModule { }
