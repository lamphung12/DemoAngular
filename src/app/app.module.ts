import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CaculatorComponent } from './caculator/caculator.component';
import { FontSizeComponent } from './font-size/font-size.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { ColorComponent } from './color/color.component';
import { HackernewComponent } from './hackernew/hackernew.component';
import { LikeComponent } from './like/like.component';

import { CustomerComponent } from './customer/customer.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AngularRatingBarComponent } from './angular-rating-bar/angular-rating-bar.component';
import { TodoComponent } from './todo/todo.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { TimelinesAppComponent } from './timelines-app/timelines-app.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CaculatorComponent,
    FontSizeComponent,
    // PetComponent,
    ColorComponent,
    HackernewComponent,
    LikeComponent,

    CustomerComponent,
     NameCardComponent,
     ProgressBarComponent,
     AngularRatingBarComponent,
     TodoComponent,
     FormRegisterComponent,
     TimelinesAppComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
