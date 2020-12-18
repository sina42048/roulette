import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent implements OnInit, OnDestroy {
  isLoading = true;
  activation$: Subscription;
  loading$: Subscription;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private auth: AuthService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const token = params.get('token');
      this.activation$ = this.auth.activation(token).subscribe(() => {
        this.toastr.success('your account activated , you can login now !', 'Sign up', {
          positionClass: 'toast-bottom-right',
        });
      });
      this.loading$ = this.auth.loading$.subscribe((isLoading) => {
        this.isLoading = isLoading;
      });
    })
  }

  ngOnDestroy() {
    this.activation$.unsubscribe();
    this.loading$.unsubscribe();
  }
}
