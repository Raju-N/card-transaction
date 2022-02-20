import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  onMenuClick(drawer: any) {
    drawer.toggle();
  }

  navigateToApplyCard() {
    this.router.navigate(['apply-card']);

    // this.router.navigate(['apply-card'], {
    //   queryParams: { user: 'Admin', page: 1 }
    // });
  }
}
