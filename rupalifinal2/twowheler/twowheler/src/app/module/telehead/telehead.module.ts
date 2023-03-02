import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeleheadRoutingModule } from './telehead-routing.module';
import { DefaulterlistComponent } from './defaulterlist/defaulterlist.component';
import { ViewemidefaulterComponent } from './viewemidefaulter/viewemidefaulter.component';


@NgModule({
  declarations: [DefaulterlistComponent, ViewemidefaulterComponent],
  imports: [
    CommonModule,
    TeleheadRoutingModule
  ]
})
export class TeleheadModule { }
