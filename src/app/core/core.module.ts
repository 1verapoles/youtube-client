import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { FilteringBlockComponent } from './components/filtering-block/filtering-block.component';
//import { RouterGuard } from './guards/router.guard';


@NgModule({
  declarations: [
    CoreComponent,
    ErrorComponent,
    HeaderComponent,
    FilteringBlockComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatInputModule,
    MatToolbarModule
  ],
  exports: [ErrorComponent, HeaderComponent, FilteringBlockComponent]
})
export class CoreModule { }
