import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ledger } from 'app/model/ledger';
import { LoanDisbursement } from 'app/model/loan-disbursement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LedgercommonserviceService {
  public url = "http://localhost:9090";

  constructor(private http: HttpClient) { }

  e:Ledger={
    ledgerId: 0,
    ledgerCreatedDate: '',
    totalLoanAmount: 0,
    payableAmountwithInterest: 0,
    tenure: 0,
    monthlyEmi: 0,
    amountPaidTillDate: '',
    remainingAmount: 0,
    nextEmiStartDate: '',
    nextEmiEnddate: '',
    defaulterCount: 0,
    previousEmiStatus: '',
    currentMonthEmiStatus: '',
    loanEndDate: '',
    loanStatus: ''
  }
  createLedger(ledger1: Ledger): Observable<Object>
  {
    alert("savedata1");
    return this.http.put("http://localhost:9090/saveledger",ledger1);

}
}
