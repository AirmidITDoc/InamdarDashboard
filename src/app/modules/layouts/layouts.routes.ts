import { Routes } from '@angular/router';
import { DASHBOARD } from 'src/app/constants/routes';
import { LayoutsComponent } from './layouts.component';

export const LAYOUTS_ROUTES: Routes = [
  {
         path: '',
         component: LayoutsComponent,
         children: [
            { path: '', redirectTo: DASHBOARD.path, pathMatch: 'full' },
            {
                path: DASHBOARD.path,
                loadComponent: () =>
                  import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
            },
            {
              path: DASHBOARD.path,
              loadComponent: () =>
                import('./pages/category-wise/category-wise.component').then((m) => m.CategoryWiseComponent),
          },
        ],
  },
];
