import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'app/model/Customer';
import { ViewEmi } from 'app/model/view-emi';
import { CommonserviceCustomerService } from 'app/Sharednew/commonservice-customer.service';
import { DisbursementCommonServiceService } from 'app/Sharednew/disbursement-common-service.service';
import { DisbursementreportserviceService } from 'app/Sharednew/disbursementreportservice.service';
import { ViewemicommonserviceService } from 'app/Sharednew/viewemicommonservice.service';

@Component({
  selector: 'app-view-emi',
  templateUrl: './view-emi.component.html',
  styleUrls: ['./view-emi.component.css']
})
export class ViewEmiComponent implements OnInit {

  constructor(public ce:ViewemicommonserviceService,public cs:CommonserviceCustomerService, public cs1:DisbursementCommonServiceService,  public r:Router,public route:ActivatedRoute,public re1:DisbursementreportserviceService) { }
  c:ViewEmi[]
  e:Customer[]

  ngOnInit(): void {
    this.cs.getCustomerList().subscribe((data:Customer[])=>
    this.e=data       
    )}
  
  //   viewemi(id:number){
  //   this.cs.viewemi(id).subscribe((data:ViewEmi)=>
  //   {this.cs.c=data
    
  //   console.log(this.cs.c);    
  // })
  // setTimeout(() => {this.routing()},500*1)
  
  
  // }

  getemis(id:number)
  {  alert(id);
      this.ce.getEmi(id).subscribe((data:ViewEmi[])=>
      {
        console.log(data);
      
        this.ce.c1=data
        console.log(this.ce.c1);
        
      
      })
      setTimeout(() => {this.routing()},2000*1)
  
  
        }
        
        routing(){
        
        this.r.navigateByUrl("role/bankmanager/viewsinglecustemi");
        }
              
      


emi(id:number,date:string)
{ 
  this.ce.emi(id,date).subscribe() 
} 

  
  // this.cs.getallviewemi().subscribe((data:ViewEmi[])=>
  //   this.e=data        
  //   )

 
  
  
  // viewemi(id:number){
  // this.cs.getallviewemi2(id).subscribe((data:ViewEmi[])=>
  // this.e=data        
  // )}
  
    // routing(){
    //   // window.open("role/bankmanager/viewemi")
    //   this.r.navigateByUrl("role/bankmanager/viewemi");
    //   }
  
  
  
  // presspaid(id:number,eq:ViewEmi){
  //   this.cs.pressemipaid(id,eq).subscribe();
  //   setTimeout(() => {this.routing()},2000*1)
  //   window.location.reload();
  // }

  


}