import { Routes } from '@angular/router';
import { CustomerLayoutComponent } from './shared/layouts/customer-layout/customer-layout.component';
import { AdminLayoutComponent } from './shared/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    component: CustomerLayoutComponent,
    loadChildren: () =>
      import('./customer/customer.module').then((m) => m.CustomerModule),
  },
];
