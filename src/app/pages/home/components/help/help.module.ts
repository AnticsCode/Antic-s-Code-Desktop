import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpRoutingModule } from './help.routing';
import { HelpContentComponent } from './components/help-content/help-content.component';
import { HelpIndexComponent } from './components/help-index/help-index.component';
import { HelpComponent } from './help.component';

@NgModule({
  declarations: [
    HelpContentComponent,
    HelpIndexComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    HelpRoutingModule
  ]
})

export class HelpModule { }
