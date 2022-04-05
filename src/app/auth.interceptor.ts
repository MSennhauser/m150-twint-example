import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
private merchantId = '1100035365';
private password = '6npgpPcnhgrvYFa4';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // base 64 encryption
    const basicAuth = btoa(`${this.merchantId}:${this.password}`);

    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json',
        'Authorization': `Basic ${basicAuth}`,
      },
    });

    return next.handle(req);
  }
}