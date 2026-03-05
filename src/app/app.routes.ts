import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth.routes';
import { assetsRoutes } from './features/assets/assets.routes';
import { assignmentsRoutes } from './features/assignments/assignments.routes';
import { dashboardRoutes } from './features/dashboard/dashboard.routes';

export const routes: Routes = [
  { path: 'auth', children: authRoutes },
  { path: 'assets', children: assetsRoutes },
  { path: 'assignments', children: assignmentsRoutes },
  { path: 'dashboard', children: dashboardRoutes },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
