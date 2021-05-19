import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'administration',
        loadChildren: () =>
          import('../administration/administration.module').then(
            (m) => m.AdministrationModule
          ),
      },
      {
        path: 'quality-management',
        loadChildren: () =>
          import('../quality-management/quality-management.module').then(
            (m) => m.QualityManagementModule
          ),
      },
      {
        path: 'customer-service',
        loadChildren: () =>
          import('../customer-service/customer-service.module').then(
            (m) => m.CustomerServiceModule
          ),
      },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
