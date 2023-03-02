import { CustomerviewforaccountheadComponent } from "app/module/accounthead/customerviewforaccounthead/customerviewforaccounthead.component";
import { title } from "process";

export class Menu {
    public static menu: Array<any> = [
      {
        admin: [
          {path: "adminbash", title: "Dashbord", icon: "pe-7s-graph", class: "" },
          {path: "city", title: "Create Student", icon: "pe-7s-graph", class: "" }
      ],
      emp: [
        {path: "empdash", title: "dashbord", icon: "pe-7s-graph", class: "" },
        {path: "demo", title: "Demmmo", icon: "pe-7s-graph", class: "" }
  
    ],
  
    operation:[
      {path: "oeenq", title: "VIEW ENQUIERY", icon: "pe-7s-graph", class: "" },
      // {path: "oedash", title: "DASHBORD", icon: "pe-7s-graph", class: "" },
      {path: "oecustomer", title: "VIEW CUSTOMER", icon: "pe-7s-graph", class: "" },
      // {path: "cibil", title: "CIBILSCORE", icon: "pe-7s-graph", class: "" }
    ],
    relation:[
        {path: "oeenquiry", title: "ENQUERY", icon: "pe-7s-graph", class: "" },
        {path:"review",title:"VIEW ENQUIRY",icon: "pe-7s-graph", class: "" },
        {path: "oecustomer", title: "REGISTER CUSTOMER", icon: "pe-7s-graph", class: "" },
        {path: "oedocument", title: "UPLOAD DOCUMENT", icon: "pe-7s-graph", class: "" },
      
        

      ],
      cr:[//{path: "credit", title: "ENQUERY", icon: "pe-7s-graph", class: "" },
      {path: "view", title: "viewCustomer", icon: "pe-7s-graph", class: "" },

      ],
      ab:[
        
        {path:"sanction",title:"SANCTION LETTER", icon: "pe-7s-graph", class: "" },
        {path:'customerviewac',title:"CUSTOMER VIEW", icon: "pe-7s-graph", class: ""},
        // {path: "oecustomer", title: "REG CUSTOMER", icon: "pe-7s-graph", class: "" },
      ],
      bankmanager:[
        {path: "customerviewbm", title: "VIEW CUSTOMER", icon: "pe-7s-graph", class: "" },
        {path:"disbursementform",title:"DISBURSEMENT LETTER", icon: "pe-7s-graph", class: "" },
       //  {path: "oecustomer", title: "REG CUSTOMER", icon: "pe-7s-graph", class: "" },
        //  {path: "ledger", title: "LEDGER", icon: "pe-7s-graph", class: "" },
         {path: "viewemi", title: "VIEW EMI", icon: "pe-7s-graph", class: "" },
         {path: "viewsinglecustemi", title: "VIEW SINGLE EMI", icon: "pe-7s-graph", class: "" },
         {path: "getallemidata", title: "GET ALL EMI DATA", icon: "pe-7s-graph", class: "" },
         
         
      ],
      th:[
        {path:'viewemidefaulter',title: "DEFAULTER LIST", icon: "pe-7s-graph", class: "" },
        //{path:'customerviewbm',title: "VIEW CUSTOMER", icon: "pe-7s-graph", class: "" },
        //{path:'defaulterlist',title: "DEFAULTER LIST", icon: "pe-7s-graph", class: "" },
      ],
      }
    ];
  }
  