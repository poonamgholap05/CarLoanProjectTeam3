import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonserviceService } from 'app/Sharednew/commonservice.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  constructor(public fb:FormBuilder,public cs:CommonserviceService,public r:Router,public route :ActivatedRoute) { }

  enquiryForm:FormGroup
  submitted = false;
  
    ngOnInit(): void {
      this.enquiryForm=this.fb.group({  
        cid:[this.cs.e.cid,[Validators.required]],    
        firstName:[this.cs.e.firstName,[Validators.required]],
        lastName:[this.cs.e.lastName,[Validators.required]],
        age:[this.cs.e.age,[Validators.required]],
        mobileNo:[this.cs.e.mobileNo,[Validators.required]],
        pancardNo:[this.cs.e.pancardNo,[Validators.required]],
        email:[this.cs.e.email,[Validators.required]],
        cibilscore:[this.cs.e.cibilscore,[Validators.required]],
        status:[this.cs.e.status,[Validators.required]]

     
      })    
    }
  
    onSave(){   
      alert("save")
        console.log(this.enquiryForm.value)
        this.cs.createEnquiry(this.enquiryForm.value).subscribe();
        this.submitted = true;
        this.ngOnInit()
       // this.r.navigate(["../air-india-flights"],   {relativeTo: this.route})
        //this.ser.bus=this.regform.value  
      } 

}
