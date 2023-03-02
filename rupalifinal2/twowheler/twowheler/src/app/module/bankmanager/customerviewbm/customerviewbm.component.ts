import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'app/model/Customer';
import { LoanDisbursement } from 'app/model/loan-disbursement';
import { ViewEmi } from 'app/model/view-emi';
import { CommonserviceCustomerService } from 'app/Sharednew/commonservice-customer.service';
import { DisbursementCommonServiceService } from 'app/Sharednew/disbursement-common-service.service';
import { DisbursementreportserviceService } from 'app/Sharednew/disbursementreportservice.service';
import { SanctionreportserviceService } from 'app/Sharednew/sanctionreportservice.service';
import { ViewemicommonserviceService } from 'app/Sharednew/viewemicommonservice.service';

@Component({
  selector: 'app-customerviewbm',
  templateUrl: './customerviewbm.component.html',
  styleUrls: ['./customerviewbm.component.css']
})
export class CustomerviewbmComponent implements OnInit {

  constructor(public ce:ViewemicommonserviceService,public cs:CommonserviceCustomerService, public cs1:DisbursementCommonServiceService,  public r:Router,public route:ActivatedRoute,public re1:DisbursementreportserviceService) { }

  e:Customer[]

  ngOnInit(): void {
    this.cs.getCustomerList().subscribe((data:Customer[])=>
    this.e=data       
    )}
   
        sentDisbursementmail(cid:number){
          alert("mail")
          // const email=new Email();
          // email.id=e.cid
          // email.name=e.firstName
          // email.receiver=e.email
          // email.status=e.status
           this.re1.email(cid).subscribe();
            }

            // generateExcelLedger(){
            //   window.open("http://localhost:9090/export-to-excel")
            // }
            generateemiexcel(id:number){
              window.open("http://localhost:9090/export-to-excel/"+id)
            }
            pdf(id:number)
            { 
              window.open("http://localhost:9090/pdfgenerator/"+id)
            } 
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
            //  this.r.navigate(['oecustomer']);
              
            }
            disbursementupdate(id:number){
     this.cs1.agreementId=id;
     this.cs1.getDisbursement(id).subscribe((data:LoanDisbursement)=>
  {this.cs1.e=data
  
  console.log(this.cs1.e);    
})
setTimeout(() => {this.routing()},500*1)


}

routing(){

this.r.navigateByUrl("role/bankmanager/disbursementform");
}
generateemi(id:number,data:any){
  alert("emi list generated download by excel and pdf button!!!!")
this.cs.generateviewemi(id,data).subscribe();

}

presspaid(id:number,eq:ViewEmi){
  this.ce.pressemipaid(id,eq).subscribe();
  setTimeout(() => {this.routing()},2000*1)
  window.location.reload();
}
            }
          


