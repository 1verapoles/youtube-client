import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoreComponent } from './core.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { FilteringBlockComponent } from './components/filtering-block/filtering-block.component';


@NgModule({
  declarations: [
    CoreComponent,
    ErrorComponent,
    HeaderComponent,
    FilteringBlockComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatToolbarModule
  ],
  exports: [ErrorComponent, HeaderComponent, FilteringBlockComponent]
})
export class CoreModule { }
