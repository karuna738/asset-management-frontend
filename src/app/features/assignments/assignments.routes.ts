import { Routes } from '@angular/router';
import { AssignmentListComponent } from './pages/assignment-list/assignment-list.component';
import { AssignmentDetailComponent } from './pages/assignment-detail/assignment-detail.component';

export const assignmentsRoutes: Routes = [
  { path: '', component: AssignmentListComponent },
  { path: ':id', component: AssignmentDetailComponent }
];
