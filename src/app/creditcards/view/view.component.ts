import { Component } from '@angular/core';
import { ActivatedRoute,Route,Router } from '@angular/router';
import { Creditcard } from 'src/app/models/creditcard';
import { CreditcardsService } from 'src/app/services/creditcards.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  creditCardDetails!:Creditcard;
  creditCardID!:number;

  constructor(
    private creditcardsService:CreditcardsService,
    private router:ActivatedRoute){

    this.creditCardID=parseInt(this.router.snapshot.paramMap.get("id")||'')

    this.creditcardsService.getCreditCardById(this.creditCardID).subscribe({
      next: (data) => {
        this.creditCardDetails = data;
      },
      error: (err) => {
        console.error('Error in component:', err);
      }
    });

  }

}
