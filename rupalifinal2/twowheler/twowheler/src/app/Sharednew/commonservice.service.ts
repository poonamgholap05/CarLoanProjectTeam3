import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'app/model/Customer';
import { CustomerDocuments } from 'app/model/customer-documents';
import { Enquiry } from 'app/model/enquiry';
import { ViewEmi } from 'app/model/view-emi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

 public url = "http://localhost:9090";

  constructor(private http: HttpClient) { }

  e:Enquiry={
    cid:0,
    firstName:'',
    lastName:'',
    status:'',
    age:0,
    email:'',
    mobileNo:0,
    pancardNo:'',
    cibilscore:0
  }
  // createEnquiry(enqiry: Enquiry): Observable<Object> {
  //   if(enqiry.cid==0){
  //     enqiry.status="enquiry"
  //   }
  //   else{
  //     enqiry.status="registred"
  //   }
    
  //   return this.http.post("http://localhost:9090/saveEnn",enqiry);
  // }

  createEnquiry(enqiry: Enquiry): Observable<Object>
  {
    alert("savedata1");
    return this.http.post("http://localhost:9090/saveEnn",enqiry);

}


  getEnquiryList(): Observable<any> {
    return this.http.get("http://localhost:9090/getAll");
  }

  updateEnquiry(cid: number, value: any): Observable<Object> {
    alert("eitcid")
    return this.http.put("http://localhost:9090/updateEn/"+cid, value);
  }

  deleteEnquiry(cid: number) {
    return this.http.delete("http://localhost:9090/deleteEn/"+cid);
  }

getCibil(e:number)
  {
    alert("getcibil");

    return this.http.get("http://localhost:9090/getcibil/"+e);
  }
  getApplicants(): any {
    return this.http.get("http://localhost:9090/getAllData");
  }
  appStatus(id:number): any {
    alert("change")
    return this.http.get(this.url+"/changeStatus/"+id);
  }
  getDoc(id:number):Observable<any>{

    return this.http.get<CustomerDocuments[]>(this.url+"/getDocc/"+id);
  
}

  // c: Customer = {
  //   customerId: 0,
  //   customerName:"",
  //   customerDateOfBirth:"",
  //   customerAge: 0,
  //   customerGender: "",
  //   customerEmail: "",
  //   requiredAmount:0,
  //   status:"",
 
  //   address: [],
  //   profession: [],
  //  accountdetail: [],
  //   gurantordetails: [],
  //   carinfo: [],
  // }

  // saveInfo(c: Customer): any {
   
  //   return this.http.post("http://localhost:9090/savecust", c,{responseType: 'text'});
  // }
  // getApplicants(): any {
  //   return this.http.get("http://localhost:9090/getAllData");
  // }
  // getApplicantsWithStatus(status:string): any {
  //   return this.http.get("http://localhost:9090/getbystatus/"+status);
  // }



}

