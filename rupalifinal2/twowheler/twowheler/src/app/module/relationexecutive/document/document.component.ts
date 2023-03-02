import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonserviceCustomerService } from 'app/Sharednew/commonservice-customer.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  srcResult: any;

  constructor(private fb:FormBuilder, public cs:CommonserviceCustomerService) { }

  ngOnInit(): void {
    this.doc=this.fb.group({
      customerId:[this.cs.c.customerId,[Validators.required]],
     
    })
  }


  profilePhoto:any;
  signature:any;
  pancard:any;
 
  salaryslip:any;
  bankStatement:any;
  addressProof:any;
  
  doc:FormGroup;

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
}
onselectFile1(event:any){

  this.profilePhoto=event.target.files[0];
} 
onselectFile2(event:any){

  this.signature=event.target.files[0];
}onselectFile3(event:any){

  this.pancard=event.target.files[0];
}
onselectFile4(event:any){

  this.salaryslip=event.target.files[0];
}
onselectFile5(event:any){

  this.bankStatement=event.target.files[0];
}
onselectFile6(event:any){

  this.addressProof=event.target.files[0];
}

Submit(){  
 
  
  const d=JSON.stringify(this.doc.value);

  const em=new FormData();
  em.append("profilePhoto",this.profilePhoto);
  em.append("signature",this.signature);
  em.append("pancard",this.pancard);
  
  em.append("salaryslip",this.salaryslip);
  em.append("bankStatement",this.bankStatement);
  em.append("addressProof",this.addressProof);
  em.append("customerId",d);
  console.log(em)
alert("doc")
this.cs.upload(em).subscribe();

this.cs.c.customerId=0
this.ngOnInit();
}
}