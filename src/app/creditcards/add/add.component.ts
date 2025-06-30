import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Creditcard } from 'src/app/models/creditcard';
import { CreditcardsService } from 'src/app/services/creditcards.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent {
 
  constructor(
    private creditcardsService:CreditcardsService,
    private router:Router
  ){

  }
    newCreditCard:Creditcard ={
        id:undefined,
        name:"",
        bankname:"",
        description:"",
        maxCredit:5000,
        interestRate:12,
        active:true,
        recommendedCreditScore:"100-500",
        anualFee:12,
        termsandconditions:"Terms and conditions for credit card",
        createdDate:Date(),
        updatedDate:Date(),
    }
    
    SaveCreditCard() {
    console.log("Form Submitted");
        this.creditcardsService.createCreditCard(this.newCreditCard).subscribe(data=>{
           alert("Credit Card Added");
           this.router.navigate(['/creditcards']);
        })
    }
}
