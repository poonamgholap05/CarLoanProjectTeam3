import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SanctionreportserviceService {
  constructor(public http: HttpClient) { }
  email(cid:number): any {
    
    alert("sanction")
    return this.http.post("http://localhost:9090/mailsendSanction/"+cid,{responseType: 'text'});
  }
}
