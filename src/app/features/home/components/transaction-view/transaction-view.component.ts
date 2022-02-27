import { card } from 'src/app/shared/interface/card.interface';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionViewComponent implements OnInit {
  @Input('cardDetail') selectedCard: card | any;
  @ViewChild('balance') balanceEl: any;

  userQuer = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('Transaction view', changes);
  }

  ngOnInit(): void {
    console.log('balance el - INIT', this.balanceEl);
  }

  ngAfterViewInit() {
    console.log('balance el - AFTERVIEWINIT', this.balanceEl);
  }

  ngAfterViewChecked() {
    console.log('balance el - AFTERVIEWChecked', this.balanceEl);
  }
}
