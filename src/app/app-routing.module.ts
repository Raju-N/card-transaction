import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardApplicationComponent } from './features/card-application/card-application.component';
import { HomeComponent } from './features/home/home.component';
import { ListCreationComponent } from './features/list-creation/list-creation.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { AuthorizationGuardService } from './shared/guards/authorization-guard.service';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'apply-card', component: CardApplicationComponent },
//   { path: 'task', component: ListCreationComponent },
//   { path: 'task/:id', component: ListCreationComponent },
//   //{ path: 'task/:id/:userName', component: ListCreationComponent },
//   {
//     path: '**',
//     //component: HomeComponent,
//     redirectTo: 'home',
//   },
// ];

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'apply-card',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./features/card-application/card-application.module').then(
        (m) => m.CardApplicationModule
      ),
  },
  {
    path: 'task',
    canActivate: [AuthGuardService, AuthorizationGuardService],
    loadChildren: () =>
      import('./features/list-creation/list-creation.module').then(
        (m) => m.ListCreationModule
      ),
  },
  {
    path: '**',
    //component: HomeComponent,
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
