import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MATERIAL_COMPATIBILITY_MODE,
  MatButtonModule,
   MatIconModule,
  MatToolbarModule,MatCheckboxModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
 
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  MatCheckboxModule,
  
  
  ],
  providers: [
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }
  ],

  declarations: []
})
export class MaterialModule { }
