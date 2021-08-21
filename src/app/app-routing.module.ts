import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './core/components/error/error.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RouterGuard } from './core/guards/router.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canActivate: [AuthGuard] },
  { path: 'youtube', loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule), canActivate: [RouterGuard] },
  { path: '**', component: ErrorComponent, canActivate: [RouterGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
