import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Email } from 'app/model/email';
import { Enquiry } from 'app/model/enquiry';
import { CommonserviceService } from 'app/Sharednew/commonservice.service';
import { ReportserviceService } from 'app/Sharednew/reportservice.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent implements OnInit {

  constructor(public cs:CommonserviceService, public r:Router,public route:ActivatedRoute,public re:ReportserviceService) { }

  e:Enquiry[]

  ngOnInit(): void {
   
    this.cs.getEnquiryList().subscribe((data:Enquiry[])=>
    this.e=data        
    )}
  
  deleteEnquiry(cid:number){
    this.cs.deleteEnquiry(cid).subscribe()
    window.location.reload();
  }
  update(eq:Enquiry){
    this.cs.createEnquiry(eq).subscribe();
    setTimeout(() => {this.routing()},2000*1)
  }

  routing(){
    this.r.navigateByUrl("role/relation/oecustomer");

  }

  editEnquiry(e:Enquiry){
    alert("edit");
    this.cs.e=Object.assign({},e) 
    //this.cs.updateEnquiry(e).subscribe();
    //this.r.navigate(['oeenquiry']);
    
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
