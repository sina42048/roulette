import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { RegisterResponse } from '../models/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;
  loading$: Subscription;
  loading = false;

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.loading$ = this.authService.loading$.subscribe(isLoading => {
      this.loading = isLoading;
    });

    this.signUpForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern(/^[A-Za-z0-9]+/)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'cpassword': new FormControl(null, [Validators.required, Validators.minLength(6), SignUpComponent.matchValues('password')])
    });
  }

  public static matchValues(
    matchTo: string 
  ): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value
        ? null
        : { isMatching: false };
    };
  }

  onSubmit() {
    const { username, email, password, cpassword } = this.signUpForm.value;
    this
      .authService
      .register(username, email, password, cpassword)
      .subscribe((data: RegisterResponse) => {
        this.toastr.success('Congrats ! your account created successfully !', 'Sign up', {
          positionClass: 'toast-bottom-right',
        });
        this.router.navigate(['/game']);
      });
  }

  ngOnDestroy() {
    this.loading$.unsubscribe();
  }

}
