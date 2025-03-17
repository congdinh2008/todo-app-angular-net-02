import { Observable } from 'rxjs';
import { CategoryModel } from '../../models/category/category.model';
import { PaginatedResult } from '../../models/paginated-result.model';

export interface ICategoryService {
  getAll(): Observable<CategoryModel[]>;

  search(filter: any): Observable<PaginatedResult<CategoryModel>>;

  getById(id: number): Observable<CategoryModel>;

  create(data: CategoryModel): Observable<CategoryModel>;

  update(id: string, data: CategoryModel): Observable<CategoryModel>;

  delete(id: string): Observable<boolean>;
}
