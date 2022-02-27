import { environment } from './../../../../environments/environment';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';

  @Output() menuClick = new EventEmitter();

  bgColor = environment.navBgColor;

  constructor() {}

  ngOnInit(): void {}

  onMenuClick() {
    this.menuClick.emit();
  }
}
