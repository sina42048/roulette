import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  email = '';
  loading = false;

  constructor(private toastr: ToastrService,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.loading$.subscribe((isLoading) => {
      this.loading = isLoading;
    })
  }

  onSubmit() {
    this.auth.forget(this.email).subscribe(() => {
      this.toastr.success('New password sent to your email !', 'New Password', {
        positionClass: 'toast-bottom-right',
      });
      this.auth.loading$.next(false);
    })
  }

}
