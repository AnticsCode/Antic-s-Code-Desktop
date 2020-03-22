import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { CreateFormRoutingModule } from './create-form.routing';
import { CreateFormComponent } from './create-form.component';
import { CreateFormContentComponent } from './components/create-form-content/create-form-content.component';
import { CreateFormIndexComponent } from './components/create-form-index/create-form-index.component';
import { CreatorService } from '../create/services/creator.service';

import {
  NbInputModule,
  NbButtonModule,
  NbSelectModule,
  NbPopoverModule,
  NbDialogModule
}
from '@nebular/theme';

import { LoadDraftComponent } from '@app/shared/components/layout/dialogs/load-draft/load-draft.component';
import { ComponentsModule } from '@app/shared/components/components.module';
import { CreateFormTabIntroComponent } from './components/create-form-content/components/create-form-tab-intro/create-form-tab-intro.component';
import { CreateFormTabSubmitComponent } from './components/create-form-content/components/create-form-tab-submit/create-form-tab-submit.component';

@NgModule({
  declarations: [
    CreateFormComponent,
    CreateFormContentComponent,
    CreateFormIndexComponent,
    CreateFormTabIntroComponent,
    CreateFormTabSubmitComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    CreateFormRoutingModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbPopoverModule,
    NbDialogModule.forChild(),
  ],
  entryComponents: [
    LoadDraftComponent
  ]
})

export class CreateFormModule { }
