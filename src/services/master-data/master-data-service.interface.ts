import { Observable } from 'rxjs';
import { PaginatedResult } from '../../models/paginated-result.model';

export interface IMasterDataService<T> {
  getAll(): Observable<T[]>;

  search(filter: any): Observable<PaginatedResult<T>>;

  getById(id: number): Observable<T>;

  create(data: T): Observable<T>;

  update(id: string, data: T): Observable<T>;

  delete(id: string): Observable<boolean>;
}
