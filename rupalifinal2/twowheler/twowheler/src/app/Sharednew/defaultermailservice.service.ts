import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefaultermailserviceService {
  constructor(public http: HttpClient) { }
  email() {
    return this.http.get("http://localhost:9090/mailsendDefaulter/")
  }

}
