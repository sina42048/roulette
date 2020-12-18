import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  supportForm: FormGroup;
  loading$: Subscription;
  loading = false;

  constructor(private auth: AuthService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.loading$ = this.auth.loading$.subscribe((isLoading) => {
      this.loading = isLoading;
    });
    
    this.supportForm = new FormGroup({
      'title' : new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    const { title, description } = this.supportForm.value;
    this.auth.support(title, description).subscribe((response) => {
      this.toastr.success('we will contact you via email soon !', 'Ticket Sent !', {
        positionClass: 'toast-bottom-right',
      });
      this.router.navigate(['panel']);
    });
  }
}
