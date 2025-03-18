import { Injectable } from '@angular/core';
import { ICategoryService } from './category-service.interface';
import { CategoryModel } from '../../models/category/category.model';
import { HttpClient } from '@angular/common/http';
import { MasterDataService } from '../master-data/master-data.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends MasterDataService<CategoryModel> implements ICategoryService {
  constructor(protected override httpClient: HttpClient) {
    super(httpClient, 'categories');
  }
}
