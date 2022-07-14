import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CaculatorComponent } from './caculator/caculator.component';
import { FontSizeComponent } from './font-size/font-size.component';
import {FormsModule} from "@angular/forms";
import { PetComponent } from './pet/pet.component';
import { ColorComponent } from './color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CaculatorComponent,
    FontSizeComponent,
    PetComponent,
    ColorComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
