import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-charge-account',
  templateUrl: './charge-account.component.html',
  styleUrls: ['./charge-account.component.css']
})
export class ChargeAccountComponent implements OnInit {
  amount = null
  chargeAccountForm: FormGroup;
  isLoading$: Subscription;
  chargeAccount$: Subscription;
  loading = false;

  constructor(private auth: AuthService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.isLoading$ = this.auth.loading$.subscribe((isLoading) => {
      this.loading = isLoading;
    });
    this.chargeAccountForm = new FormGroup({
      'amount' : new FormControl(null, [Validators.required, Validators.min(5)])
    });
  }

  onSubmit() {
    const { amount } = this.chargeAccountForm.value;
    this.chargeAccount$ = this.auth.chargeAccount(amount).subscribe(() => {
      this.toastr.success('your account charged Successfully !', 'Account charge', {
        positionClass: 'toast-bottom-right',
      });
      this.router.navigate(['/panel']);
    });
  }

}
