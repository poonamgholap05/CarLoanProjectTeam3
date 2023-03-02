import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerviewbmComponent } from '../bankmanager/customerviewbm/customerviewbm.component';
import { DefaulterlistComponent } from './defaulterlist/defaulterlist.component';
import { ViewemidefaulterComponent } from './viewemidefaulter/viewemidefaulter.component';

const routes: Routes =[
  
  {path:'customerviewbm',component:CustomerviewbmComponent},
 {path:'defaulterlist',component:DefaulterlistComponent},
 {path:'viewemidefaulter',component:ViewemidefaulterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeleheadRoutingModule { }
