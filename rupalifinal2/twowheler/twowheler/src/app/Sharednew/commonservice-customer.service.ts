import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'app/model/Customer';
import { CustomerDocuments } from 'app/model/customer-documents';
import { ViewEmi } from 'app/model/view-emi';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceCustomerService {
  
  public url = "http://localhost:9090";
  e1: Customer;


  constructor(private http: HttpClient) { }
  c: Customer = {
    customerId: 0,
    customerName: "",
    customerDateOfBirth: "",
    customerAge: 0,
    customerGender: "",
    customerEmail: "",
    requiredAmount: 0,
    status: "",

    address: [],
    profession: [],
    accountdetail: [],
    gurantordetails: [],
    carinfo: [],
    sanctiondetails: [],
    loanDisbursementDetails: [],
    ledger:[]
  }
  
  // createCustomer(enqiry: Customer): Observable<Object> {
  //   if(enqiry.cid==0){
  //     enqiry.status="Customer"
  //   }
  //   else{
  //     enqiry.status="registred"
  //   }
    
  //   return this.http.post("http://localhost:9090/saveEnn",enqiry);
  // }

  saveInfo(c: Customer): any {
   return this.http.post("http://localhost:9090/savecust", c,{responseType: 'text'});
     }

 getCustomerList(): Observable<any> {
      return this.http.get("http://localhost:9090/getAllData");
    }
    
  updateCustomer(cid: number, value: any): Observable<Object> {
    alert("eitcid")
    return this.http.put("http://localhost:9090/updateSingle/"+cid, value);
  }

  deleteCustomer(cid: number) {
    return this.http.delete("http://localhost:9090/deleteData/"+cid);
  }
 
  // getCustomerDefaulterList(): Observable<any> {
  //   return this.http.get("http://localhost:9090/defaulterlist");
  // }
  generateviewemi(id:number,viewemi:ViewEmi):Observable<object>{
    return this.http.post("http://localhost:9090/saveemi/"+id,viewemi);
  }
  

  getCustomerDefaulterList(): Observable<any>{
    return this.http.get("http://localhost:9090/getdistinct");
  }

  
  getApplicants(): any {
    return this.http.get("http://localhost:9090/getAllData");
  }
  getApplicantsWithStatus(status:string): any {
    return this.http.get("http://localhost:9090/getbystatus/"+status);
  }

  upload(em:FormData){
    alert("docum")
    console.log("em")
    return this.http.post("http://localhost:9090/document",em);
  }

  getDoc(id:number):Observable<any>{

    return this.http.get<CustomerDocuments[]>(this.url+"/getSingleData/"+id);
  
}
notice(id:number){

  return this.http.get(this.url+"/notice/"+id);
}





}

