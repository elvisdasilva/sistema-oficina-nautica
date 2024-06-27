import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: '',
    component: DashboardComponent,
  },
];
