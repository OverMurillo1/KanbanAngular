import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatDialogModule } from '@angular/material/dialog';
import { PortalModule } from '@angular/cdk/portal';


const components = [MatToolbarModule, 
                    MatIconModule, 
                    DragDropModule, 
                    MatButtonModule, 
                    MatFormFieldModule, 
                    MatInputModule,
                    MatSelectModule,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    OverlayModule,
                    TextFieldModule,
                    MatDialogModule,
                    PortalModule];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: components
})
export class MaterialCdkModule { }
