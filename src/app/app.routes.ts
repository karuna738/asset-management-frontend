import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { authRoutes } from './features/auth/auth.routes';
import { assetsRoutes } from './features/assets/assets.routes';
import { assignmentsRoutes } from './features/assignments/assignments.routes';
import { dashboardRoutes } from './features/dashboard/dashboard.routes';

export const routes: Routes = [
  // Auth routes - NO layout wrapper
  { path: 'auth', children: authRoutes },
  
  // All other routes - WITH layout wrapper
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'assets', children: assetsRoutes },
      { path: 'assignments', children: assignmentsRoutes },
      { path: 'dashboard', children: dashboardRoutes },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
