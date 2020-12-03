import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  email = '';

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.toastr.info('will be available as soon as possible !', 'under construction !', {
      positionClass: 'toast-bottom-right',
    });
  }

}
