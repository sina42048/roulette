import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  linkToChangePassword() {
    this.router.navigate(['/panel/change-password']);
  }

  linkToChargeAccount() {
    this.router.navigate(['panel/charge-account']);
  }

  linkToBetHistory() {
    this.router.navigate(['panel/bet-history']);
  }

  linkToSupportTicket() {
    this.router.navigate(['panel/support']);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/game']);
  }

}
