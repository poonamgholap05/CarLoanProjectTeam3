import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/Customer';
import { CustomerDocuments } from 'app/model/customer-documents';
import { CommonserviceService } from 'app/Sharednew/commonservice.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  constructor(public cs:CommonserviceService,) { }

  applist:Customer[];


  ngOnInit(): void {
    // setTimeout(() => {this.ngOnInit()},1000*1)
   
    this.cs.getApplicants().subscribe((data:Customer[])=>{
     this.applist=data
    
console.log(this.applist)  
    
    }
    )}
    
  retrievedDoc:CustomerDocuments={
    customerDocumentsId: 0,
    customerId: 0,
    profilePhoto: [],
    signature: [],
    pancard: [],

    salaryslip: [],
    bankStatement: [],
    addressProof: [],
    bankcheque: []
  }
  image(id:number)
  {
    this.cs.getDoc(id).subscribe((d:CustomerDocuments)=>{
  
      this.retrievedDoc= d;
  
    });
  }

  verification(id:number)
  {
    alert("verificat")
    this.cs.appStatus(id).subscribe();
    setTimeout(() => {this.ngOnInit()},1000*1)
  }

  

}
