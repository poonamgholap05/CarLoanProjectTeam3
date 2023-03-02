import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViewEmi } from 'app/model/view-emi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewemicommonserviceService {
  constructor(private http: HttpClient) { }
  customerId:number
  c1:ViewEmi[]
  c: ViewEmi = {
    emiid: 0,
    customerId: 0,
    agreementDate: '',
    loanAmtSanctioned: 0,
    rateOfInterest: 0,
    loanTenure: 0,
    monthlyEmiAmount: 0,
    num: 0,
    status: ''
  }
  // viewemi(id:number): Observable<any> {
  //   return this.http.get("http://localhost:9090/getbycustomerID/"+id);
  // }
  pressemipaid(id:number, value: ViewEmi): Observable<Object> {
    return this.http.put("http://localhost:9090/saveviewemibycustomer/"+id,value);
  }
  getallviewemi(){
    return this.http.get("http://localhost:9090/getviewemi/");
  }
  getEmi(id:number): Observable<any>{
    alert("id1"+id)
    return this.http.get("http://localhost:9090/getbycustomerID/"+id);
  }
  emi(id:number,date:string){
    return this.http.get("http://localhost:9090/saveviewemibycustomer/"+date+"/"+id);
  }

  
}
