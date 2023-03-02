import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditmanagerComponent } from './creditmanager/creditmanager.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewCustomerComponent } from '../creditmanagar/view-customer/view-customer.component';

const routing: Routes = [
  {path: "credit", component:CreditmanagerComponent },
  {
    path:"view",component:ViewCustomerComponent
  }
];

@NgModule({
  declarations: [CreditmanagerComponent],
  imports: [
    CommonModule,RouterModule.forChild(routing)
  ]
})
export class CreditmanagerModule { }
