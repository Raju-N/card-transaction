import { Component, OnInit, ViewChild } from '@angular/core';
import { card } from 'src/app/shared/interface/card.interface';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards: card[] = [];
  selectedCard: card | null = null;
  userQuer = '';

  constructor(private api: ApiService) {
    this.cards = this.api.getCards();
  }

  ngOnInit(): void {}

  onCardSelectEvent(selectedCard: card) {
    this.selectedCard = selectedCard;
  }

  onRefresh() {
    // this.selectedCard?.transactions.push({
    //   id: 1000003,
    //   description: 'Transfer from BCCI',
    //   type: 'credit',
    //   amount: Math.random() * 100000,
    //   transactionDate: 'Tue, 20 Jul 2021 07:20:05 GMT',
    // });

    const updatedcard: any = { ...this.selectedCard };

    updatedcard?.transactions.push({
      id: 1000003,
      description: 'Transfer from BCCI',
      type: 'credit',
      amount: Math.random() * 100000,
      transactionDate: 'Tue, 20 Jul 2021 07:20:05 GMT',
    });

    this.selectedCard = updatedcard;

    console.log(this.selectedCard?.transactions);
  }
}
