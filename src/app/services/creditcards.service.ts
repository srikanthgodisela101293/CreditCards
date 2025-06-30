import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Creditcard } from '../models/creditcard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditcardsService {

  private apiurl="http://localhost:3000/creditcards";

  constructor(

    private httpClient:HttpClient) { }
    
  //create new creditcard
  createCreditCard(creditcard:Creditcard):Observable<Creditcard>{
    return this.httpClient.post<Creditcard>(this.apiurl,creditcard);
  }
  //get all credit cards
  getCreditcards():Observable<Creditcard[]>{
   return  this.httpClient.get<Creditcard[]>(this.apiurl);
  }
  //get specific credit card
   getCreditCardById(id:number):Observable<Creditcard>{
    // const url = '${this.apiurl}/${id}';
    // return this.httpClient.get<Creditcard>(url);
    return this.httpClient.get<Creditcard>(`${this.apiurl}/${id}`)
  }
  //update Credit Card
    updatetCreditCard(creditcard:Creditcard):Observable<Creditcard>{
    const url = '${this.apiurl}/${creditcard.id}';
    return this.httpClient.put<Creditcard>(url,creditcard);
  }

    //delete specific credit card
   deleteCreditCardById(id:number):Observable<void>{
    debugger
    const url = `${this.apiurl}/${id}`;
    return this.httpClient.delete<void>(url);
  }
}
