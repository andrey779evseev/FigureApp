import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatSelectModule} from '@angular/material/select'
import {MatOptionModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {FormsModule} from '@angular/forms'
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { FigureBasketComponent } from './figure-basket/figure-basket.component'
import { CreateFigureDialogComponent } from './figure-basket/create-figure-dialog/create-figure-dialog.component';
import { CreateDetailComponent } from './create-detail/create-detail.component';
import { CreatedDetailComponent } from './created-detail/created-detail.component';
import { SquareComponent } from './figures/square/square.component';
import { CircleComponent } from './figures/circle/circle.component';
import { TriangleComponent } from './figures/triangle/triangle.component'

@NgModule({
  declarations: [
    AppComponent,
    FigureBasketComponent,
    CreateFigureDialogComponent,
    CreateDetailComponent,
    CreatedDetailComponent,
    SquareComponent,
    CircleComponent,
    TriangleComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSnackBarModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        DragDropModule,
        MatTooltipModule,
        MatSelectModule,
        MatOptionModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
