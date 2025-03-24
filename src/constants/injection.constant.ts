import { InjectionToken } from '@angular/core';
import { IAuthService } from '../services/auth/auth-service.interface';
import { ICategoryService } from '../services/category/category-service.interface';
import { ISupplierService } from '../services/supplier/supplier-service.interface';
import { IPermissionService } from '../services/permission/permission-service.interface';
import { IProductService } from '../services/product/product-service.interface';

export const AUTH_SERVICE = new InjectionToken<IAuthService>('AUTH_SERVICE');

export const CATEGORY_SERVICE = new InjectionToken<ICategoryService>(
  'CATEGORY_SERVICE'
);
export const SUPPLIER_SERVICE = new InjectionToken<ISupplierService>(
  'SUPPLIER_SERVICE'
);
export const PRODUCT_SERVICE = new InjectionToken<IProductService>(
  'PRODUCT_SERVICE'
);
export const PERMISSION_SERVICE = new InjectionToken<IPermissionService>(
  'PERMISSION_SERVICE'
);
