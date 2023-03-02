export class Ledger {
    ledgerId:number
	ledgerCreatedDate:string;
	totalLoanAmount:number;
	payableAmountwithInterest:number;
	tenure:number;
	monthlyEmi:number	
	amountPaidTillDate:string;
	remainingAmount:number;
	nextEmiStartDate:string;
	nextEmiEnddate:string;
	defaulterCount:number;
	previousEmiStatus:string;
	currentMonthEmiStatus:string;
	loanEndDate:string;
	loanStatus:string;
}
