import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enquiry } from 'app/model/enquiry';
import { CommonserviceService } from 'app/Sharednew/commonservice.service';

@Component({
  selector: 'app-viewequiry',
  templateUrl: './viewequiry.component.html',
  styleUrls: ['./viewequiry.component.css']
})
export class ViewequiryComponent implements OnInit {

  constructor(public cs:CommonserviceService, public r:Router,public route:ActivatedRoute) { }

  e:Enquiry[]

  ngOnInit(): void {
    this.cs.getEnquiryList().subscribe((data:Enquiry[])=>
    this.e=data       
    )}

    getCibil(e:number){
      this.cs.getCibil(e).subscribe();
      window.location.reload();
    }
}
