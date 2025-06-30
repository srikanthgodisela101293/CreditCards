export interface Creditcard {
    id:number | undefined;
    name:string;
    bankname:string;
    description:string;
    maxCredit:number;
    interestRate:number;
    active:boolean;
    recommendedCreditScore:string;
    anualFee:number;
    termsandconditions:string;
    createdDate:string;
    updatedDate:string;
}

