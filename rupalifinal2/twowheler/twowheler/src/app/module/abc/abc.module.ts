import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewcusstomerComponent } from '../operationexecutive/viewcusstomer/viewcusstomer.component';
import { SanctionletterComponent } from '../accounthead/sanctionletter/sanctionletter.component';


const routing: Routes = [
//   {path: 'abcdash', component:DashbordComponent },

//  {path:'oecustomer',component:ViewcusstomerComponent},
// {path:'sanction',component:SanctionletterComponent}
  
];

@NgModule({
  declarations: [DashbordComponent],
  imports: [
    CommonModule,RouterModule.forChild(routing)
  ]
})
export class AbcModule { }
