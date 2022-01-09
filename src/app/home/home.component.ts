import { Component, OnInit } from '@angular/core';
import { ApiService } from '../ApiService/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards: any[] = []

  constructor(private api: ApiService) {
    this.cards = this.api.getCards();
  }

  ngOnInit(): void {
  }

}
