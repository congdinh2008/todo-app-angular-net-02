import { Component, Inject, OnInit } from '@angular/core';
import { PRODUCT_SERVICE } from '../../../constants/injection.constant';
import { IProductService } from '../../../services/product/product-service.interface';
import { ProductModel } from '../../../models/product/product.model';
import { ServicesModule } from '../../../services/services.module';
import { CommonModule } from '@angular/common';
import { ProductOverviewComponent } from "../../shared/common/components/product-overview/product-overview.component";

@Component({
  selector: 'app-home',
  imports: [ServicesModule, CommonModule, ProductOverviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public data: ProductModel[] = [];

constructor(
    @Inject(PRODUCT_SERVICE) private productService: IProductService
  ) {
    console.log('HomeComponent constructor called');
  }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.productService.getAll().subscribe((res: ProductModel[]) => {
      this.data = res;
      console.log(res);
      
    });
  }
}
