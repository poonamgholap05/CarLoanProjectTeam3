import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerregisterComponent } from './customerregister/customerregister.component';
import { DocumentComponent } from './document/document.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import {MatStepperModule} from '@angular/material/stepper';

const routing: Routes = [
  {path: 'oeenquiry', component:EnquiryComponent },
  {path:'oecustomer',component:CustomerregisterComponent},
  {path:'oedocument',component:DocumentComponent},
  {path:'review',component:ViewEnquiryComponent}
  
];
@NgModule({
  declarations: [ CustomerregisterComponent, DocumentComponent, EnquiryComponent, ViewEnquiryComponent,],
  imports: [
    CommonModule,RouterModule.forChild(routing),
    ReactiveFormsModule,FormsModule,MatStepperModule
  ]
})
export class RelationexecutiveModule { }
