import { Component } from '@angular/core';
import { ActivatedRoute,Route,Router } from '@angular/router';
import { CreditcardsService } from 'src/app/services/creditcards.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
creditCardID!:number;

  constructor( private router:ActivatedRoute, 
    private route:Router, 
    private creditcardsService:CreditcardsService){

    this.creditCardID=parseInt(this.router.snapshot.paramMap.get("id")||'')

    this.creditcardsService.deleteCreditCardById(this.creditCardID).subscribe( data => {
        alert("Creaditcard Deleted Successfully");
        this.route.navigate(['creditcards']);
  })
  }
}
