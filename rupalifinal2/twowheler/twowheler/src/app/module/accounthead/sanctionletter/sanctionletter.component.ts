import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonserviceSanctionService } from 'app/Sharednew/commonservice-sanction.service';
import { ReportserviceService } from 'app/Sharednew/reportservice.service';

@Component({
  selector: 'app-sanctionletter',
  templateUrl: './sanctionletter.component.html',
  styleUrls: ['./sanctionletter.component.css']
})
export class SanctionletterComponent implements OnInit {
  constructor(public fb:FormBuilder,public cs:CommonserviceSanctionService,public r:Router,public route :ActivatedRoute,public re:ReportserviceService) { }

  sanctiondetails:FormGroup
  submitted = false;
  
    ngOnInit(): void {
      this.sanctiondetails=this.fb.group({  
        sanctionId:[this.cs.e.sanctionId,[Validators.required]],    
        applicantName:[this.cs.e.applicantName,[Validators.required]],
        contactDetails:[this.cs.e.contactDetails,[Validators.required]],
        interestType:[this.cs.e.interestType,[Validators.required]],
        loanAmtSanctioned:[this.cs.e.loanAmtSanctioned,[Validators.required]],
        loanTenure:[this.cs.e.loanTenure,[Validators.required]],
        modeOfPayment:[this.cs.e.modeOfPayment,[Validators.required]],
        monthlyEmiAmount:[this.cs.e.monthlyEmiAmount,[Validators.required]],
        rateOfInterest:[this.cs.e.rateOfInterest,[Validators.required]],
        sanctionDate:[this.cs.e.sanctionDate,[Validators.required]],
        status:[this.cs.e.status,[Validators.required]]
     
      })    
    }
  
    onSave(){   
      alert("save")
        console.log(this.sanctiondetails.value)
        
        this.cs.createSanction(this.sanctiondetails.value).subscribe();
        this.submitted = true;
        this.ngOnInit()
       // this.r.navigate(["../air-india-flights"],   {relativeTo: this.route})
        //this.ser.bus=this.regform.value  
     // } 
      
    // onSave(){   
    //   console.log(this.sanctiondetails.value)
    //   this.cs.updateSanction(this.cs.e.sanctionId,this.sanctiondetails.value).subscribe();
    //  // window.location.reload();    
    // } 
    setTimeout(() => {this.routing()},1000*1)
  
  }
  
  routing(){
    
    this.r.navigateByUrl("role/ab/customerviewac");
  }
    }
    

