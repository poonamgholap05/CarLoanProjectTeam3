import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'app/model/Customer';
import { Sanction } from 'app/model/sanction';
import { CommonserviceCustomerService } from 'app/Sharednew/commonservice-customer.service';
import { CommonserviceSanctionService } from 'app/Sharednew/commonservice-sanction.service';
import { ReportserviceService } from 'app/Sharednew/reportservice.service';
import { SanctionreportserviceService } from 'app/Sharednew/sanctionreportservice.service';

@Component({
  selector: 'app-customerviewforaccounthead',
  templateUrl: './customerviewforaccounthead.component.html',
  styleUrls: ['./customerviewforaccounthead.component.css']
})
export class CustomerviewforaccountheadComponent implements OnInit {

  constructor(public cs:CommonserviceCustomerService,public cs1:CommonserviceSanctionService ,public r:Router,public route:ActivatedRoute,public re:SanctionreportserviceService) { }

  e:Customer[]

  ngOnInit(): void {
   
    this.cs.getCustomerList().subscribe((data:Customer[])=>
    this.e=data        
    )}
  
  deleteCustomer(cid:number){
    this.cs.deleteCustomer(cid).subscribe()
    window.location.reload();
  }
  // update(eq:Customer){
  //   this.cs.createCustomer(eq).subscribe();
   
  // }

  // editCustomer(e1:Customer){
  //   alert("edit");
  //   this.cs.e1=Object.assign({},e1) 
  //   //this.cs.updateCustomer(e).subscribe();
  //   //this.r.navigate(['oeCustomer']);
    
  // }

  



sanction(id:number){
  this.cs1.sanctionId=id;
  this.cs1.getSanction(id).subscribe((data:Sanction)=>
  {this.cs1.e=data
  
  console.log(this.cs1.e);    
})
setTimeout(() => {this.routing()},500*1)


}

routing(){

this.r.navigateByUrl("role/ab/sanction");
}


  
  sentmail(cid:number){
    alert("mail")
    // const email=new Email();
    // email.id=e.cid
    // email.name=e.firstName
    // email.receiver=e.email
    // email.status=e.status
     this.re.email(cid).subscribe();
      }
}

