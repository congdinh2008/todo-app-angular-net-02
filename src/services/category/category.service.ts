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

  search(filter: any): Observable<PaginatedResult<CategoryModel>> {
    return this.httpClient.post<PaginatedResult<CategoryModel>>(
      this.url + '/search',
      filter
    );
  }

  getById(id: number): Observable<CategoryModel> {
    return this.httpClient.get<CategoryModel>(`${this.url}/${id}`);
  }

  create(data: CategoryModel): Observable<CategoryModel> {
    return this.httpClient.post<CategoryModel>(this.url, data);
  }

  update(id: string, data: CategoryModel): Observable<CategoryModel> {
    return this.httpClient.put<CategoryModel>(`${this.url}/${id}`, data);
  }

  delete(id: string): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.url}/${id}`);
  }
}
