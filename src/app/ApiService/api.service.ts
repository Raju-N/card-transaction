import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { card } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  cards: card[] = [
    {
      "name": "Virat Kholi",
      "cardNumber": 5453000100020003,
      "cardName": "HDFC Millennia",
      "expiryDate": "11/22",
      "cardType": "master",
      "vendor": "HDFC",
      "currentBalance": 70000,
      "transactions": [
        {
          "id": 1000000,
          "description": "Transfer to BCCI",
          "type": "debit",
          "amount": 2000.7774747,
          "transactionDate": "Tue, 20 Jul 2021 04:50:05 GMT"
        },
        {
          "id": 1000001,
          "description": "Transfer from BCCI",
          "type": "credit",
          "amount": 20000,
          "transactionDate": "Fri, 06 Aug 2021 12:36:05 GMT"
        }
      ]
    },
    {
      "name": "MS Dhoni",
      "cardNumber": 7781000700070007,
      "cardName": "ICICI Amazon pay",
      "expiryDate": "02/10",
      "cardType": "visa",
      "vendor": "ICICI",
      "currentBalance": 200000,
      "transactions": [
        {
          "id": 1000003,
          "description": "Transfer from BCCI",
          "type": "credit",
          "amount": 1000,
          "transactionDate": "Tue, 20 Jul 2021 07:20:05 GMT"
        },
        {
          "id": 1000004,
          "description": "Transfer to BCCI",
          "type": "debit",
          "amount": 200,
          "transactionDate": "Tue, 27 Jul 2021 08:50:05 GMT"
        }
      ]
    }
  ]

  constructor(private http: HttpClient) { }

  getCards(): card[] {
    return this.cards;
  }


}
