import { CityServiceService } from './module/shared/city-service.service';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './home/about-us/about-us.component';
// import { MatCardModule } from '@angular/material/card';
  import {MatStepperModule} from '@angular/material/stepper';
  import { MatInputModule } from '@angular/material/input';
  import { MatFormFieldModule } from "@angular/material/form-field";
  
// import { CustomerviewforaccountheadComponent } from './accounthead/customerviewforaccounthead/customerviewforaccounthead.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ViewCustomerComponent } from './module/creditmanagar/view-customer/view-customer.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { EmiComponent } from './emi/emi.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ApplyprocesscomponentComponent } from './applyprocesscomponent/applyprocesscomponent.component';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,LoginComponent, HomeComponent, AboutUsComponent, ViewCustomerComponent, FrontpageComponent, EmiComponent, FaqComponent, ContactUsComponent, ApplyprocesscomponentComponent, 
  ],
  imports: [
    BrowserAnimationsModule,HttpClientModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,FormsModule,
    FixedPluginModule,HttpClientModule,Ng5SliderModule,MatInputModule,MatStepperModule,MatAutocompleteModule,MatFormFieldModule,
   
  ],
  providers: [CityServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
