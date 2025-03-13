import { Injectable } from '@angular/core';
import { ICategoryService } from './category-service.interface';
import { CategoryModel } from '../../models/category/category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedResult } from '../../models/paginated-result.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService implements ICategoryService {
  private readonly url = 'http://localhost:5176/api/v1/categories';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<CategoryModel[]> {
    return this.httpClient.get<CategoryModel[]>(this.url);
  }

  search(): Observable<PaginatedResult<CategoryModel>> {
    throw new Error('Method not implemented.');
  }
  
  getById(id: number): Observable<CategoryModel> {
    throw new Error('Method not implemented.');
  }
  
  create(data: CategoryModel): Observable<CategoryModel> {
    throw new Error('Method not implemented.');
  }
  
  update(id: number, data: CategoryModel): Observable<CategoryModel> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Observable<CategoryModel> {
    throw new Error('Method not implemented.');
  }
}
