import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WritersRoutingModule } from './writers.routing';
import { WritersIndexComponent } from './components/writers-index/writers-index.component';
import { WritersContentComponent } from './components/writers-content/writers-content.component';
import { WritersComponent } from './writers.component';

@NgModule({
  declarations: [
    WritersIndexComponent,
    WritersContentComponent,
    WritersComponent
  ],
  imports: [
    CommonModule,
    WritersRoutingModule
  ]
})

export class WritersModule { }
