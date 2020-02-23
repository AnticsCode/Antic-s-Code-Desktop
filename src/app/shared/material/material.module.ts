import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule, MatInputModule,
    MatCheckboxModule, MatTooltipModule,
    MatDialogModule, MatSnackBarModule,
    MatMenuModule
  ],
  exports: [
    MatFormFieldModule, MatInputModule,
    MatCheckboxModule, MatTooltipModule,
    MatDialogModule, MatSnackBarModule,
    MatMenuModule
  ]
})

export class MaterialModule { }
