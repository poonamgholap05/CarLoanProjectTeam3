import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DisbursementCommonServiceService } from 'app/Sharednew/disbursement-common-service.service';
import { ReportserviceService } from 'app/Sharednew/reportservice.service';

@Component({
  selector: 'app-disbursmentform',
  templateUrl: './disbursmentform.component.html',
  styleUrls: ['./disbursmentform.component.css']
})
export class DisbursmentformComponent implements OnInit {
  constructor(public fb:FormBuilder,public cs:DisbursementCommonServiceService,public r:Router,public route :ActivatedRoute) { }

  loanDisbursementDetails:FormGroup
  submitted = false;
  
    ngOnInit(): void {
      this.loanDisbursementDetails=this.fb.group({  
        agreementId:[this.cs.e.agreementId,[Validators.required]],    
        loanNo:[this.cs.e.loanNo,[Validators.required]],
        agreementDate:[this.cs.e.agreementDate,[Validators.required]],
        amountPayType:[this.cs.e.amountPayType,[Validators.required]],
        totalAmount:[this.cs.e.totalAmount,[Validators.required]],
        bankName:[this.cs.e.bankName,[Validators.required]],
        accountNumber:[this.cs.e.accountNumber,[Validators.required]],
        IFSCCode:[this.cs.e.IFSCCode,[Validators.required]],
        accountType:[this.cs.e.accountType,[Validators.required]],
        transferAmount:[this.cs.e.transferAmount,[Validators.required]],
        paymentStatus:[this.cs.e.paymentStatus,[Validators.required]],
        amountPaidDate:[this.cs.e.amountPaidDate,[Validators.required]]
     
      })    
    }
  
    onSave(){   
      alert("save")
        console.log(this.loanDisbursementDetails.value)
        this.cs.createDisbursement(this.loanDisbursementDetails.value).subscribe();
        this.submitted = true;
        
        this.ngOnInit()
       // this.r.navigate(["../air-india-flights"],   {relativeTo: this.route})
        //this.ser.bus=this.regform.value  
        setTimeout(() => {this.routing()},2000*1)
      } 
      routing(){
        
        this.r.navigateByUrl("role/bankmanager/customerviewbm");
        }

     
      
}
