import { Routes } from '@angular/router';
import { GymList } from './pages/gym-list/gym-list';
import { GymDetail } from './pages/gym-detail/gym-detail';
import { Compare } from './pages/compare/compare';

export const routes: Routes = [
  { path: '', component: GymList },
  { path: 'gym/:id', component: GymDetail },
  { path: 'compare', component: Compare },
  { path: '**', redirectTo: '' },
];