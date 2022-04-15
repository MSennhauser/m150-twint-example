import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json',
        'Authorization': 'Basic MTEwMDAzNTM2NTo2bnBncFBjbmhncnZZRmE0',
      },
    });

    return next.handle(req);
  }
}