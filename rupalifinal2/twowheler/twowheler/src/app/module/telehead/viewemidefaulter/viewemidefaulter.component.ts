import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'app/model/Customer';
import { CommonserviceCustomerService } from 'app/Sharednew/commonservice-customer.service';
import { EmidefaultermailserviceService } from 'app/Sharednew/emidefaultermailservice.service';

@Component({
  selector: 'app-viewemidefaulter',
  templateUrl: './viewemidefaulter.component.html',
  styleUrls: ['./viewemidefaulter.component.css']
})
export class ViewemidefaulterComponent implements OnInit {

  constructor(public re:EmidefaultermailserviceService,public cs:CommonserviceCustomerService,  public r:Router,public route:ActivatedRoute) { }

  e:Customer[]

  ngOnInit(): void {
    this.cs.getCustomerDefaulterList().subscribe((data:Customer[])=>
    this.e=data       
    )}
   
    sentmail(cid:number){
          alert("mail")
          // const email=new Email();
          // email.id=e.cid
          // email.name=e.firstName
          // email.receiver=e.email
          // email.status=e.status
           this.re.email(cid).subscribe();
            }

            generateExcelLedger(){
              window.open("http://localhost:9090/export-to-excel")
            }

            
}



            
          


