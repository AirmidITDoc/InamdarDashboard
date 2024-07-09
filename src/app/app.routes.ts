import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./modules/layouts/layouts.routes').then(
        (c) => c.LAYOUTS_ROUTES
      ),
    // canActivate: [AuthGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./modules/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];
