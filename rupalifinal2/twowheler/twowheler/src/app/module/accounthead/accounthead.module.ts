import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanctionletterComponent } from './sanctionletter/sanctionletter.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerregisterComponent } from '../relationexecutive/customerregister/customerregister.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CustomerviewforaccountheadComponent } from './customerviewforaccounthead/customerviewforaccounthead.component';



const routing: Routes = [
  
  {path: 'sanction', component:SanctionletterComponent },
  // {path:'oecustomer',component:CustomerregisterComponent},
  {path:'customerviewac',component:CustomerviewforaccountheadComponent},
  
];

@NgModule({
  declarations: [SanctionletterComponent, CustomerviewforaccountheadComponent],
  imports: [
    CommonModule,RouterModule.forChild(routing),ReactiveFormsModule,FormsModule,
  ]
})
export class AccountheadModule { }
