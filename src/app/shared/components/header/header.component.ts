import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '';

  @Output() menuClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onMenuClick(){
    this.menuClick.emit();
  }

}
