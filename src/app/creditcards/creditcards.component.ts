import { Component, ViewChild } from '@angular/core';
import { Creditcard } from '../models/creditcard';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CreditcardsService } from '../services/creditcards.service'; 

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss']
})
export class CreditcardsComponent {

creditcards:Creditcard[] =[];  

constructor(private creditcardsService:CreditcardsService){
  this.creditcardsService.getCreditcards().subscribe((data:Creditcard[]) =>{
  this.creditcards=data;

  this.dataSource = new MatTableDataSource(this.creditcards);
  this.dataSource.paginator=this.paginator;
  this.dataSource.sort=this.sort;

  })
}
dataSource = new MatTableDataSource(this.creditcards);

displayColumns=["select","id","name","bankname","description","maxCredit","interestRate","active","recommendedScore","actions"];

selection = new SelectionModel(true,[]);
 
@ViewChild(MatPaginator) paginator!:MatPaginator;
@ViewChild(MatSort) sort!:MatSort;

selectHandler(row:Creditcard){
   this.selection.toggle(row as never);
}

}
