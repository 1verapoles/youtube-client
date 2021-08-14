import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { ErrorComponent } from './core/components/error/error.component';
import { RouterGuard } from './core/guards/router.guard';
import { DetailsComponent } from './youtube/components/details/details.component';
import { YoutubeComponent } from './youtube/youtube.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  //{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  // { path: '', loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule) },
  { path: 'auth', component: LoginComponent },
  { path: 'youtube', component: YoutubeComponent, canActivate: [RouterGuard] },
  { path: 'youtube/:id', component: DetailsComponent, canActivate: [RouterGuard] },
  { path: '**', component: ErrorComponent, canActivate: [RouterGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
