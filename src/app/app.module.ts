import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { YoutubeInterceptor } from './core/interceptors/youtube.interceptor';
import { environment } from 'src/environments/environment';
import { AdminModule } from './admin/admin.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './redux/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    AdminModule,
    StoreModule.forRoot({ youtube: reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true },
    { provide: "BASE_API_URL", useValue: environment.apiUrl },
    { provide: "API_KEY", useValue: environment.apiKey }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
