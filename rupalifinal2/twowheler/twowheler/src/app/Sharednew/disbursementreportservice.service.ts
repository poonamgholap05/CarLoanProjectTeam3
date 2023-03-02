import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisbursementreportserviceService {

  constructor(public http: HttpClient) { }
  email(cid:number): any {
    
    alert("disbursement")
    return this.http.post("http://localhost:9090/mailsendDisbursment/"+cid,{responseType: 'text'});
  }
}
