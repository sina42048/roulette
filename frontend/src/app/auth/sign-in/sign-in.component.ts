import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { RegisterResponse, User } from '../models/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {
  signInForm: FormGroup;
  loading$: Subscription;
  loading = false;

  constructor(private auth: AuthService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.loading$ = this.auth.loading$.subscribe((isLoading) => {
      console.log(isLoading);
      this.loading = isLoading;
    });

    this.signInForm = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^[A-Za-z0-9]+/)]),
      'password': new FormControl('', [ Validators.required, Validators.minLength(6) ])
    });
  }

  onSubmit() {
    const { username, password } = this.signInForm.value;
    this.auth.login(username, password).subscribe((userData: RegisterResponse) => {
      this.toastr.success(`Welcome dear ${userData.user.username} !`, 'Sign in', {
        positionClass: 'toast-bottom-right',
      });
      this.router.navigate(['/game']);
    });
  }

  ngOnDestroy() {
    this.loading$.unsubscribe();
  }

}
