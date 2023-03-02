import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from 'app/model/email';

@Injectable({
  providedIn: 'root'
})
export class ReportserviceService {
  constructor(public http: HttpClient) { }

  
  


  email(cid:number): any {
    
    alert("reject")
    return this.http.post("http://localhost:9090/mailrejectsendEnquiry/"+cid,{responseType: 'text'});
  }
  

}