import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sanction } from 'app/model/sanction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceSanctionService {

  public url = "http://localhost:9090";

  constructor(private http: HttpClient) { }
  sanctionId:number;
  e:Sanction={
    sanctionId: 0,
    sanctionDate: '',
    applicantName: '',
    contactDetails: 0,
    loanAmtSanctioned: 0,
    interestType: '',
    rateOfInterest: 0,
    loanTenure: 0,
    monthlyEmiAmount: 0,
    modeOfPayment: '',
    status: ''
  }
  createSanction(sanction:Sanction): Observable<Sanction>
  {
    alert("savedata1");
    return this.http.put<Sanction>("http://localhost:9090/postSingleDataSanction",sanction);

}

getSanction(id: number): Observable<Sanction> {
  alert(id)
  return this.http.get<Sanction>("http://localhost:9090/getSingleDataSanction/"+id);
}


// updateSanction(id: number, value: any): Observable<Sanction> {
//   return this.http.put<Sanction>("http://localhost:9090/postSingleDataSanction/"+id, value);
// }

}
