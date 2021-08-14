import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './core/components/error/error.component';
import { DetailsComponent } from './youtube/components/details/details.component';
import { YoutubeComponent } from './youtube/youtube.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'detail/:id', component:  },
  // { path: '*', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  // { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  // { path: '', loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule) },
  { path: 'youtube', component: YoutubeComponent },
  { path: 'youtube/:id', component: DetailsComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
