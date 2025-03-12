import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./customer/customer.module').then((m) => m.CustomerModule),
  },
];
