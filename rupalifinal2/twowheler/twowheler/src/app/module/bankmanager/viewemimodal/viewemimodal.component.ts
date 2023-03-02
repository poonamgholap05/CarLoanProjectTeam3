import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewEmi } from 'app/model/view-emi';
import { ModalService } from 'app/Sharednew/modalservice.service';
import { ViewemicommonserviceService } from 'app/Sharednew/viewemicommonservice.service';

@Component({
  selector: 'app-viewemimodal',
  templateUrl: './viewemimodal.component.html',
  styleUrls: ['./viewemimodal.component.css']
})
export class ViewemimodalComponent implements OnInit  {
  
  private element: any;
  routing2: any;

  constructor(public ce:ViewemicommonserviceService, private modalService: ModalService, private el: ElementRef,public cs:ViewemicommonserviceService,   public r:Router,public route:ActivatedRoute)  {
      
  }
c:ViewEmi[]
  ngOnInit(): void{
  
      }

    
  
    // routing(){
    //   // window.open("role/bankmanager/viewemi")
    //   this.r.navigateByUrl("role/bankmanager/viewemi");
    //   }
  
  
  
  presspaid(id:number,eq:ViewEmi){
    this.cs.pressemipaid(id,eq).subscribe();
  
        
        
      
    // setTimeout(() => {this.routing()},2000*1)
     window.location.reload();
  }
  routing() {
    throw new Error('Method not implemented.');
  }
//   getviewemi(id:number){
//     this.cs.customerId=id;
//     this.cs.getEmi(id).subscribe((data:ViewEmi[])=>
//     {this.cs.c=data
    
//     console.log(this.cs.c);    
//   })
//   setTimeout(() => {this.routing()},500*1)
  
  
//   }
  
 
}
function getemis(id: number) {
  throw new Error('Function not implemented.');
}

function routing() {
  this.r.navigateByUrl("role/bankmanager/viewsinglecustemi");
}

