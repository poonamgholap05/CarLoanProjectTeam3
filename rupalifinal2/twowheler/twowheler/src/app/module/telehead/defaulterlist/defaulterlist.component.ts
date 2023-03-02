import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'app/model/Customer';
import { CommonserviceCustomerService } from 'app/Sharednew/commonservice-customer.service';
import { DefaultermailserviceService } from 'app/Sharednew/defaultermailservice.service';
import { SanctionreportserviceService } from 'app/Sharednew/sanctionreportservice.service';

@Component({
  selector: 'app-defaulterlist',
  templateUrl: './defaulterlist.component.html',
  styleUrls: ['./defaulterlist.component.css']
})
export class DefaulterlistComponent implements OnInit {

 
  constructor(public rs:DefaultermailserviceService,public cs:CommonserviceCustomerService, public r:Router,public route:ActivatedRoute,public re:SanctionreportserviceService) { }

  e:Customer[]

  ngOnInit(): void {
   
    this.cs.getCustomerDefaulterList().subscribe((data:Customer[])=>
    this.e=data        
    )}
  sendmaildefaultermail(){
    this.rs.email().subscribe();
  }
}
