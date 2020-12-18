import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit, OnDestroy {
  changePassForm: FormGroup;
  changePassword$: Subscription;
  isLoading$: Subscription;
  loading = false;

  constructor(private auth: AuthService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.changePassForm = new FormGroup({
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'cpassword': new FormControl(null, [Validators.required, Validators.minLength(6), ChangePasswordComponent.matchValues('password')])
    });

    this.isLoading$ = this.auth.loading$.subscribe((isLoading) => {
      this.loading = isLoading;
    })
  }

  onSubmit() {
    const { password, cpassword } = this.changePassForm.value;
    this.changePassword$ = this.auth.changePassword(password, cpassword).subscribe(() => {
      this.toastr.success('your password updated successsfully !', 'Password Update', {
        positionClass: 'toast-bottom-right',
      });
      this.router.navigate(['/panel']);
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

  ngOnDestroy() {
    this.isLoading$.unsubscribe();
    if (this.changePassword$) {
      this.changePassword$.unsubscribe()
    }
  }

}
