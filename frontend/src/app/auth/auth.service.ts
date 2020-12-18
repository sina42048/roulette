import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { SocketService } from '../socket.service';
import { RegisterResponse, User } from './models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUserData$ = new BehaviorSubject<User>(null);
  loading$ = new BehaviorSubject<boolean>(false);
  isLoggedIn = false;
  token : string;

  constructor(private http: HttpClient,
              private toastr: ToastrService,
              private socket: SocketService) { }

  register(username: string, email: string, password: string, cPassword: string) {
    this.loading$.next(true);
    return this.http.post<{ msg: string }>(environment.apiUrl + 'public/register', {
      username,
      email,
      password,
      cpassword: cPassword
    }).pipe(catchError(error => {
      this.loading$.next(false);
      if (error.status === 400 && error.error.code === 1) {
        this.toastr.error('Email already taken !', 'Email', {
          positionClass: 'toast-bottom-right',
        });
      }
      if (error.status === 400 && error.error.code === 2) {
        this.toastr.error('Username already taken !', 'Username', {
          positionClass: 'toast-bottom-right',
        });
      }
      if (error.status === 400 && error.error.code === 3) {
        this.toastr.error('Validation Fail !', 'Validation', {
          positionClass: 'toast-bottom-right',
        });
      }
      if (error.status === 500) {
        this.toastr.error('Server Error, Try Again !', 'Server Error', {
          positionClass: 'toast-bottom-right',
        });
      }
      return of();
    }),
    tap(() => {
      this.loading$.next(false);
    }));
  }

  login(username: string, password: string) {
    this.loading$.next(true);
    return this.http.post<RegisterResponse>(environment.apiUrl + 'public/login', {
      username,
      password
    }).pipe(catchError(error => {
      this.loading$.next(false);
      if (error.status === 400 && error.error.code === 1) {
        this.toastr.error('User not found !', 'User', {
          positionClass: 'toast-bottom-right',
        });
      }
      if (error.status === 400 && error.error.code === 2) {
        this.toastr.error('Please activate your account !', 'User', {
          positionClass: 'toast-bottom-right',
        });
      }
      if (error.status === 401) {
        this.toastr.error('Wrong email or password', 'Try again', {
          positionClass: 'toast-bottom-right',
        });
      }
      if (error.status === 500) {
        this.toastr.error('Server Error, Try Again !', 'Server Error', {
          positionClass: 'toast-bottom-right',
        });
      }
      return of();
    }), tap((userData: RegisterResponse) => {
      this.loading$.next(false);
      const loggedInUser = {
        id: userData.user.id,
        email: userData.user.email,
        token: userData.token,
        username: userData.user.username,
        updatedAt: userData.user.updatedAt,
        fund: userData.user.fund,
        createdAt: userData.user.createdAt
      };
      this.loggedInUserData$.next(loggedInUser);
      this.isLoggedIn = true;
      this.token = userData.token;
      this.socket.emit('userLoggedIn', userData.user.token);
    }));
  }

  activation(token: string) {
    this.loading$.next(true);
    return this.http.post<RegisterResponse>(environment.apiUrl + 'public/activation', {
      token
    }).pipe(catchError(error => {
      this.loading$.next(false);
      if (error.status === 400 ) {
        this.toastr.error('User not found !', 'User', {
          positionClass: 'toast-bottom-right',
        });
      }
      if (error.status === 401) {
        this.toastr.error('Wrong email or password', 'Try again', {
          positionClass: 'toast-bottom-right',
        });
      }
      if (error.status === 500) {
        this.toastr.error('Server Error, Try Again !', 'Server Error', {
          positionClass: 'toast-bottom-right',
        });
      }
      return of();
    }), tap(() => {
      this.loading$.next(false);
    }));
  }

  forget(email: string) {
    this.loading$.next(true);
    return this.http.post<{ msg: string }>(environment.apiUrl + 'public/forget', {
      email
    }).pipe(catchError(error => {
      this.loading$.next(false);
      if (error.status === 400 ) {
        this.toastr.error('User not found !', 'User', {
          positionClass: 'toast-bottom-right',
        });
      }
      if (error.status === 500) {
        this.toastr.error('Server error, try Again !', 'Server Error', {
          positionClass: 'toast-bottom-right',
        });
      }
      return of();
    }));
  }

  changePassword(password: string, cpassword: string) {
    this.loading$.next(true);
    return this.http.post<{ msg: string }>(environment.apiUrl + 'private/reset-password', {
      token: this.token, 
      password,
      cpassword
    }).pipe(catchError(error => {
      this.loading$.next(false);
      if (error.status === 400 ) {
        this.toastr.error('field required', 'User', {
          positionClass: 'toast-bottom-right',
        });
      }
      if (error.status === 500) {
        this.toastr.error('Server Error, Try Again !', 'Server Error', {
          positionClass: 'toast-bottom-right',
        });
      }
      return of();
    }), tap(() => {
      this.loading$.next(false);
    }));
  }

  chargeAccount(amount: number) {
    this.loading$.next(true);
    return this.http.post<{ msg: string, amount: number }>(environment.apiUrl + 'private/charge-account', {
      token: this.token, 
      amount
    }).pipe(catchError(error => {
      this.loading$.next(false);
      if (error.status === 400 ) {
        this.toastr.error('field required', 'User', {
          positionClass: 'toast-bottom-right',
        });
      }
      if (error.status === 500) {
        this.toastr.error('Server Error, Try Again !', 'Server Error', {
          positionClass: 'toast-bottom-right',
        });
      }
      return of();
    }), tap((response: { msg: string, amount: number }) => {
      this.loading$.next(false);
      this.loggedInUserData$.pipe(take(1)).subscribe((userData: User) => {
        const newUserData = {
          id: userData.id,
          email: userData.email,
          token: userData.token,
          username: userData.username,
          updatedAt: userData.updatedAt,
          fund: response.amount,
          createdAt: userData.createdAt
        };
        this.loggedInUserData$.next(newUserData);
      });
    }));
  }

  support(title: string, description: string) {
    this.loading$.next(true);
    return this.http.post<{ msg: string }>(environment.apiUrl + 'private/support', {
      token: this.token, 
      title,
      description
    }).pipe(catchError(error => {
      this.loading$.next(false);
      if (error.status === 400 ) {
        this.toastr.error('field required', 'User', {
          positionClass: 'toast-bottom-right',
        });
      }
      if (error.status === 500) {
        this.toastr.error('Server Error, Try Again !', 'Server Error', {
          positionClass: 'toast-bottom-right',
        });
      }
      return of();
    }), tap((response: { msg: string, amount: number }) => {
      this.loading$.next(false);
    }));
  }

  logout() {
    this.loggedInUserData$.next(null);
    this.isLoggedIn = false;
    this.toastr.success('logged out successfully !', 'Logout', {
      positionClass: 'toast-bottom-right',
    });
  }
}
