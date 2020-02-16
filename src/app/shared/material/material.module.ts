import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule, MatInputModule,
    MatCheckboxModule, MatTooltipModule
  ],
  exports: [
    MatFormFieldModule, MatInputModule,
    MatCheckboxModule, MatTooltipModule
  ]
})

export class MaterialModule { }
