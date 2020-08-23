import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatIconModule, MatCardModule, MatFormFieldModule,
  MatInputModule, MatButtonModule,
  MatDialogModule, MatPaginatorModule,
  MatTooltipModule, MatSidenavModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatToolbarModule,
  MatTableModule,
  MatExpansionModule,
  MatOptionModule,
  MatSelectModule,
  MatRippleModule,
  MatCheckboxModule,
  MatMenuModule
} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatExpansionModule,
    MatRippleModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatExpansionModule,
    MatRippleModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
