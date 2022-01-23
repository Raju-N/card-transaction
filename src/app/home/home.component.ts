import { Component, OnInit } from '@angular/core';
import { card } from 'src/interfaces';
import { ApiService } from '../ApiService/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards: card[] = [];
  selectedCard: card | null = null;
  userQuer = '';

  constructor(private api: ApiService) {
    this.cards = this.api.getCards();
  }

  ngOnInit(): void {
  }

  onCardSelectEvent(selectedCard: card){
    this.selectedCard = selectedCard;
  }

}
