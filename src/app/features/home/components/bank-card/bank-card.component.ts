import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { card } from 'src/app/shared/interface/card.interface';

@Component({
  selector: 'app-bank-card',
  templateUrl: './bank-card.component.html',
  styleUrls: ['./bank-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BankCardComponent implements OnInit {
  @Input() cardDetail: card | any;

  @Output() cardSelectEvent = new EventEmitter();

  userQuer = '';

  constructor() {}

  ngOnInit(): void {}

  onCardSelect() {
    this.cardSelectEvent.emit(this.cardDetail);
  }

  getSplittedCardNumber(num: number) {
    //console.log("Card Logic execution", this.cardDetail.cardName);
    const digits = [];
    const stringyNumber = num.toString();
    for (let i = 0, len = stringyNumber.length; i < len; i = i + 4) {
      digits.push(stringyNumber.substr(i, 4));
    }
    return digits;
  }
}
