import { AccountDetail } from "./account-detail";
import { Address } from "./address";
import { CarInfo } from "./car-info";
import { GuarantorDetails } from "./guarantor-details";
import { Ledger } from "./ledger";
import { LoanDisbursement } from "./loan-disbursement";
import { Profession } from "./profession";
import { Sanction } from "./sanction";

export class Customer {
  customerId:number;
customerName:string;
customerDateOfBirth:string;
customerAge:number;
customerGender:string;
customerEmail:string;
requiredAmount:number;
status:string;

address:Address[];
accountdetail:AccountDetail[];
carinfo:CarInfo[];
gurantordetails:GuarantorDetails[] ;
profession:Profession[];
sanctiondetails:Sanction[];
loanDisbursementDetails:LoanDisbursement[];
ledger:Ledger[];

  }


