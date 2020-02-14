import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule, MatInputModule,
    MatCheckboxModule, MatSelectModule
  ],
  exports: [
    MatFormFieldModule, MatInputModule,
    MatCheckboxModule, MatSelectModule
  ]
})

export class MaterialModule { }
