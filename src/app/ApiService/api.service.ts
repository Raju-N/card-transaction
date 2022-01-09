import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  cards = [
    {
      "name": "Virat Kholi",
      "cardNumber": 5453000100020003,
      "cardName": "HDFC Millennia",
      "expiryDate": "11/22",
      "cardType": "master",
      "vendor": "HDFC"
    },
    {
      "name": "MS Dhoni",
      "cardNumber": 7781000700070007,
      "cardName": "ICICI Amazon pay",
      "expiryDate": "02/10",
      "cardType": "visa",
      "vendor": "ICICI"
    }
  ]

  constructor(private http:  HttpClient) { }

  getCards() {
    return this.cards;
  }

  
}
