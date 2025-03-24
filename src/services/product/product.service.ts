import { Injectable } from '@angular/core';
import { IProductService } from './product-service.interface';
import { ProductModel } from '../../models/product/product.model';
import { HttpClient } from '@angular/common/http';
import { MasterDataService } from '../master-data/master-data.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends MasterDataService<ProductModel> implements IProductService {
  constructor(protected override httpClient: HttpClient) {
    super(httpClient, 'products');
  }
}
