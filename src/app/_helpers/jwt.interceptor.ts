import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AccountService } from 'app/_services';
import { User } from 'app/_models';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  isRefreshingToken: boolean = false;
  public newUser: Observable<User>;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private accountService: AccountService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const user = this.accountService.userValue;
    const isLoggedIn = user && user.token;
    const isApiUrl = request.url.startsWith("http://localhost" ||
      "https://www.cyberoficina.com.br");

    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.token}`
        }
      });

    }


    return next.handle(request);


  };

}