import { card } from 'src/app/shared/interface/card.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.scss'],
})
export class TransactionViewComponent implements OnInit {
  @Input('cardDetail') selectedCard: card | any;

  userQuer = '';

  constructor() {}

  ngOnInit(): void {}
}
