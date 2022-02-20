import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isInValidCredentials = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    this.isInValidCredentials = false;
    this.authService.onLogin(form.value).subscribe((res) => {
      const redirectUrl = this.route.snapshot.queryParamMap.get('redirectUrl');
      if (res) this.router.navigate([redirectUrl || '/']);
      else this.isInValidCredentials = true;
    });
  }
}
