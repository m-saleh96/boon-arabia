import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomRoutingModule { }
