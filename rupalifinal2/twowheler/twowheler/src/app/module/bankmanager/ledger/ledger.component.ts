import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LedgercommonserviceService } from 'app/Sharednew/ledgercommonservice.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  constructor(public fb:FormBuilder,public cs:LedgercommonserviceService,public r:Router,public route :ActivatedRoute) { }

  ledger:FormGroup
  submitted = false;
  
    ngOnInit(): void {
      this.ledger=this.fb.group({         
     
        ledgerId: [this.cs.e.ledgerId,[Validators.required]], 
        ledgerCreatedDate: [this.cs.e.ledgerCreatedDate,[Validators.required]], 
        totalLoanAmount: [this.cs.e.totalLoanAmount,[Validators.required]], 
        payableAmountwithInterest: [this.cs.e.payableAmountwithInterest,[Validators.required]], 
        tenure: [this.cs.e.tenure,[Validators.required]], 
        monthlyEmi: [this.cs.e.monthlyEmi,[Validators.required]], 
        amountPaidTillDate: [this.cs.e.amountPaidTillDate,[Validators.required]], 
        remainingAmount: [this.cs.e.remainingAmount,[Validators.required]], 
        nextEmiStartDate: [this.cs.e.nextEmiStartDate,[Validators.required]], 
        nextEmiEnddate: [this.cs.e.nextEmiEnddate,[Validators.required]], 
        defaulterCount: [this.cs.e.defaulterCount,[Validators.required]], 
        previousEmiStatus: [this.cs.e.previousEmiStatus,[Validators.required]], 
        currentMonthEmiStatus:[this.cs.e.currentMonthEmiStatus,[Validators.required]], 
        loanEndDate: [this.cs.e.loanEndDate,[Validators.required]], 
        loanStatus: [this.cs.e.loanStatus,[Validators.required]], 
      })    
    }
  
    onSave(){   
      alert("save")
        console.log(this.ledger.value)
        this.cs.createLedger(this.ledger.value).subscribe();
        this.submitted = true;
        this.ngOnInit()
       // this.r.navigate(["../air-india-flights"],   {relativeTo: this.route})
        //this.ser.bus=this.regform.value  
      } 
     

}
