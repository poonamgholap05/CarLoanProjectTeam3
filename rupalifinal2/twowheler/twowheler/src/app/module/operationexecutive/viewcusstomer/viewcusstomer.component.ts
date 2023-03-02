import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'app/model/Customer';
import { CommonserviceCustomerService } from 'app/Sharednew/commonservice-customer.service';
import { CommonserviceService } from 'app/Sharednew/commonservice.service';
import { ReportserviceService } from 'app/Sharednew/reportservice.service';

@Component({
  selector: 'app-viewcusstomer',
  templateUrl: './viewcusstomer.component.html',
  styleUrls: ['./viewcusstomer.component.css']
})
export class ViewcusstomerComponent implements OnInit {

  constructor(public cs:CommonserviceCustomerService, public r:Router,public route:ActivatedRoute,public re:ReportserviceService) { }

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

  editCustomer(e1:Customer){
    alert("edit");
    this.cs.e1=Object.assign({},e1) 
    //this.cs.updateCustomer(e).subscribe();
    //this.r.navigate(['oeCustomer']);
    
  }

  
  rejectmail(cid:number){
    alert("mail")
    // const email=new Email();
    // email.id=e.cid
    // email.name=e.firstName
    // email.receiver=e.email
    // email.status=e.status
     this.re.email(cid).subscribe();
      }
}
