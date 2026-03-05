import { Routes } from '@angular/router';
import { AssetListComponent } from './pages/asset-list/asset-list.component';
import { AssetDetailComponent } from './pages/asset-detail/asset-detail.component';

export const assetsRoutes: Routes = [
  { path: '', component: AssetListComponent },
  { path: ':id', component: AssetDetailComponent }
];
