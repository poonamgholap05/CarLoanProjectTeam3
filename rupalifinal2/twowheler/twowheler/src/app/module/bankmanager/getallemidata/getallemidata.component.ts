import { Component, OnInit } from '@angular/core';
import { ViewEmi } from 'app/model/view-emi';
import { ViewemicommonserviceService } from 'app/Sharednew/viewemicommonservice.service';

@Component({
  selector: 'app-getallemidata',
  templateUrl: './getallemidata.component.html',
  styleUrls: ['./getallemidata.component.css']
})
export class GetallemidataComponent implements OnInit {

  constructor(private cs:ViewemicommonserviceService) { }
c:ViewEmi[]
  ngOnInit(): void {
    this.cs.getallviewemi().subscribe((data:ViewEmi[])=>
    this.c=data        
    )

  }
  presspaid(id:number,eq:ViewEmi){
    this.cs.pressemipaid(id,eq).subscribe();
    // setTimeout(() => {this.routing()},2000*1)
    window.location.reload();
  }
}
