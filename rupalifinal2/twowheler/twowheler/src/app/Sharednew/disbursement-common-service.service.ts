import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanDisbursement } from 'app/model/loan-disbursement';
import { Sanction } from 'app/model/sanction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisbursementCommonServiceService {

  public url = "http://localhost:9090";

  constructor(private http: HttpClient) { }
agreementId:number;
  e:LoanDisbursement={
    agreementId: 0,
    loanNo: 0,
    agreementDate: '',
    amountPayType: '',
    totalAmount: 0,
    bankName: '',
    accountNumber: 0,
    IFSCCode: '',
    accountType: '',
    transferAmount: 0,
    paymentStatus: '',
    amountPaidDate: ''
  }
  createDisbursement(loanDisbursement: LoanDisbursement): Observable<Object>
  {
    alert("savedata1");
    return this.http.put("http://localhost:9090/saveDisbursement",loanDisbursement);

}

getDisbursement(id:number): Observable<LoanDisbursement> {
  alert(id)
  return this.http.get<LoanDisbursement>("http://localhost:9090/getDisbursement/"+id);
}

}
