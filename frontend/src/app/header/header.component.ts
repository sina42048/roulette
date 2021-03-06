import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/models/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  restart$: Subscription;
  loggedInUserData$: Subscription;
  isUserLoggedIn = false;
  userData: User;
  userUpdateFund$: Subscription;
  menuClass = '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.loggedInUserData$.subscribe((userData: User) => {
      this.isUserLoggedIn = userData != null;
      this.userData = userData != null ? {...userData} : null;
    });
  }

  ngOnDestroy() {
    this.loggedInUserData$.unsubscribe();
    this.userUpdateFund$.unsubscribe();
  }
  
  @HostListener('window:scroll', ['$event'])
  onScroll($event) {
    if (window.scrollY > 20) {
      this.menuClass = 'menu-disapear';
    } else {
      this.menuClass = '';
    }
  }

}
