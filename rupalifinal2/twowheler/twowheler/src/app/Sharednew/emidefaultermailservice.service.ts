import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmidefaultermailserviceService {

  constructor(public http: HttpClient) { }

  
  


  email(cid:number): any {
    
    alert("defaulter")
    return this.http.post("http://localhost:9090/sentemidefaultermail/"+cid,{responseType: 'text'});
  }
}
