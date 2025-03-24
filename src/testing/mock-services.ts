import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserInformation } from '../models/auth/user-information.model';
import { PaginatedResult } from '../models/paginated-result.model';

// Mock Auth Service
export class MockAuthService {
  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  private _userInformation = new BehaviorSubject<UserInformation | null>(null);

  login() { return of({ accessToken: 'fake-token', user: { id: '1', username: 'testuser' } }); }
  register() { return of({ accessToken: 'fake-token', user: { id: '1', username: 'testuser' } }); }
  logout() { this._isAuthenticated.next(false); }
  isAuthenticated() { return this._isAuthenticated.asObservable(); }
  getUserInformation() { return this._userInformation.asObservable(); }
  getUserInformationFromAccessToken() { return this._userInformation.asObservable(); }
  getAccessToken() { return 'fake-token'; }
}

// Mock Product Service
export class MockProductService {
  getAll() { return of([]); }
  search() { return of({ items: [], totalCount: 0, pageNumber: 1, pageSize: 10, totalPages: 1 } as PaginatedResult<any>); }
  getById() { return of({}); }
  create() { return of({}); }
  update() { return of({}); }
  delete() { return of(true); }
}

// Mock Category Service
export class MockCategoryService {
  getAll() { return of([]); }
  search() { return of({ items: [], totalCount: 0, pageNumber: 1, pageSize: 10, totalPages: 1 } as PaginatedResult<any>); }
  getById() { return of({}); }
  create() { return of({}); }
  update() { return of({}); }
  delete() { return of(true); }
}

// Mock Supplier Service
export class MockSupplierService {
  getAll() { return of([]); }
  search() { return of({ items: [], totalCount: 0, pageNumber: 1, pageSize: 10, totalPages: 1 } as PaginatedResult<any>); }
  getById() { return of({}); }
  create() { return of({}); }
  update() { return of({}); }
  delete() { return of(true); }
}

// Mock Permission Service
export class MockPermissionService {
  hasPermission() { return true; }
  checkPermission() { return of(true); }
  hasAnyPermission() { return true; }
}
