import { MastermoduleModule } from './module/mastermodule/mastermodule.module';
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { EmployeeModule } from './module/employee/employee.module';
import { HomeComponent } from './home/home.component';
import { OperationexecutiveModule } from './module/operationexecutive/operationexecutive.module';
import { CreditmanagerModule } from './module/creditmanager/creditmanager.module';
import { RelationexecutiveModule } from './module/relationexecutive/relationexecutive.module';
import { AbcModule } from './module/abc/abc.module';

import { EnquiryComponent } from './module/relationexecutive/enquiry/enquiry.component';
import { AccountheadModule } from './module/accounthead/accounthead.module';
import { BankmanagerModule } from './module/bankmanager/bankmanager.module';
import { TeleheadModule } from './module/telehead/telehead.module';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmiComponent } from './emi/emi.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ApplyprocesscomponentComponent } from './applyprocesscomponent/applyprocesscomponent.component';


export const AppRoutes: Routes = [{
  path: '',
    component: HomeComponent,
    children:[
  {
    path:"",component:FrontpageComponent
  },
 
  {
    path:"about",component:AboutUsComponent
  },
  {
    path:"emi",component:EmiComponent
  },
  {
    path:'faq',component:FaqComponent
  },
  {
    path:'contact',component:ContactUsComponent
  },
  {
    path:'apply',component:ApplyprocesscomponentComponent
  }
 
]},

{
path:"log",component:LoginComponent
},


  {
    path: 'role',
    component: AdminLayoutComponent,
    children: [
      {path: 'admin', loadChildren: () => MastermoduleModule},
      {path: 'emp', loadChildren: () => EmployeeModule},
      {path:'operation',loadChildren:()=>OperationexecutiveModule},
      {path:'cr',loadChildren:()=>CreditmanagerModule},
      {path:'relation',loadChildren:()=>RelationexecutiveModule},
      {path:'ab',loadChildren:()=>AccountheadModule},
      {path:'bankmanager',loadChildren:()=>BankmanagerModule},
      {path:'th',loadChildren:()=>TeleheadModule}
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];



