import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEmiComponent } from './view-emi/view-emi.component';
import { DisbursmentformComponent } from './disbursmentform/disbursmentform.component';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomerviewbmComponent } from './customerviewbm/customerviewbm.component';
import { LedgerComponent } from './ledger/ledger.component';
import { CustomerregisterComponent } from '../relationexecutive/customerregister/customerregister.component';
import { ViewemimodalComponent } from './viewemimodal/viewemimodal.component';
// import { MatCardModule } from '@angular/material/card';
//  import {MatStepperModule} from '@angular/material/stepper';
//  import { MatInputModule } from '@angular/material/input';
//  import { MatFormFieldModule } from "@angular/material/form-field";
import { GetallemidataComponent } from './getallemidata/getallemidata.component';

const routing: Routes = [
  
   {path:'customerviewbm',component:CustomerviewbmComponent},
  {path: 'disbursementform', component:DisbursmentformComponent },
  {path:'oecustomer',component:CustomerregisterComponent},
  {path:'ledger',component:LedgerComponent},
  {path:'viewemi',component:ViewEmiComponent},
  {path:'viewsinglecustemi',component:ViewemimodalComponent},
  {path:'getallemidata',component:GetallemidataComponent}
];

@NgModule({
  declarations: [ ViewEmiComponent, DisbursmentformComponent, CustomerviewbmComponent, LedgerComponent, ViewemimodalComponent, GetallemidataComponent],
  imports: [
    CommonModule,RouterModule.forChild(routing),
    ReactiveFormsModule,FormsModule,
  ]
})
export class BankmanagerModule { }
