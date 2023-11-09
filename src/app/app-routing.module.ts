import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/authencation/component/login/login.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { SampleGuard } from './core/guards/sample.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [SampleGuard],
  },
  {
    path: '',
    redirectTo: 'dashboard/tour',
    pathMatch: 'full',
  },

  {
    path: 'register',
    canActivate: [SampleGuard],
    loadChildren: () =>
    import('./modules/authencation/component/register/register.module').then((m) => m.RegisterModule),
  },

  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      {
        path: 'tour',
        loadChildren: () => 
        import('../app/modules/tour/tour.module').then((m) => m.TourModule),
        data: {
          preload: true,
        }
      },
    ]
  },
  {
    path: 'profile',
    loadChildren: () =>
    import('../app/modules/profile/profile.module').then((m) => m.ProfileModule),
    data: {
      preload: true,
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
