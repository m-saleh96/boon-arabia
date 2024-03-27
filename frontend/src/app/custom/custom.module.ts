import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomRoutingModule } from './custom-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    PaymentComponent,
  ],
  imports: [
    CommonModule,
    CustomRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomModule { }
