import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { CommonserviceCustomerService } from 'app/Sharednew/commonservice-customer.service';


@Component({
  selector: 'app-customerregister',
  templateUrl: './customerregister.component.html',
  styleUrls: ['./customerregister.component.css']
})
export class CustomerregisterComponent implements OnInit {
 
  CregForm:FormGroup;

  isLinear = false;
    constructor(private fb:FormBuilder, private cs:CommonserviceCustomerService,public router:Router) { }
    ngOnInit(): void {
  
  
      this.CregForm=this.fb.group({
        customerId:[],
  customerName:[],
  customerDateOfBirth:[],
  customerAge:[],
  customerEmail:[],
  customerGender:[],
  status:[],
  requiredAmount:[],


  
  address:this.fb.group({
    permanentAddressId:[],
  areaname:[],
  cityname:[],	 
  district:[],
  state:[],
  pincode:[],
  
  }),
  accountdetail:this.fb.group({
    accountId:[],
    accountHolderName:[],
    accountNumber:[]
  }),
  
  profession:this.fb.group({
    professionId:[],
    professionType:[],
    professionSalary:[],
    professionSalaryType:[],
    professionDesignation:[],
    workingFrom:[],
  
  }),
  
  accountdetails:this.fb.group({
    accountId:[],
  accountHolderName:[],
  accountNumber:[],
  }),
  
  gurantordetails:this.fb.group({
    guarantorId:[],
  guarantorName:[],
  guarantorMobileNo:[],
  guarantorPermanentAddress:[],
  }),
  
  ledger:this.fb.group({
    ledgerId:[],
  ledgerCreatedDate:[],
  totalLoanAmount:[],
  payableAmountwithInterest:[],
  tenure:[],
  monthlyEmi:[],
  amountPaidTillDate:[],
  remainingAmount:[],
  nextEmiStartDate:[],
  nextEmiEndDate:[],
  defaulterCount:[],
  previousEmiStatus:[],
  currentMonthEmiStatus:[],
  loanEndDate:[],
  loanStatus:[],
  }),
  
 
  
  carinfo:this.fb.group({
    carId:[],
    carModelNo:[],
  carName:[],
  brandName:[],
  carPrice:[],
  colour:[],
  }),
  sanctiondetails:this.fb.group({
    
    sanctionId:[],
    sanctionDate:[],
    applicantName:[],
    contactDetails:[],
    loanAmtSanctioned:[],
    interestType:[],
    rateOfInterest:[],
    loanTenure:[],
   monthlyEmiAmount:[],  
   modeOfPayment:[],
  status:[],
  
  }),
  loanDisbursementDetails:this.fb.group({ 
       agreementId:[],
	loanNo:[],
	agreementDate:[],
	amountPayType:[],
	totalAmount:[],
	bankName:[],
	accountNumber:[],
	IFSCCode:[],
	accountType:[],
	transferAmount:[],
	paymentStatus:[],
	amountPaidDate:[],
  
  }),
  
  })
  
 }
 

 saveInfo(){
  
   console.log(this.CregForm.value)
   console.log(this.CregForm.controls[''])
  //  console.log(this.CregForm.controls['customerId']);
   this.cs.saveInfo(this.CregForm.value).subscribe((no:number)=>
     this.cs.c.customerId=no
   );
   setTimeout(() => {this.routing()},2000*1)
   
 }
 routing(){
  this.router.navigateByUrl("role/relation/oedocument");
 }
    
      
  }
  
  
  