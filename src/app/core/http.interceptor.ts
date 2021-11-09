import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ExampleHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const request = req.clone({
      url: `https://jsonplaceholder.typicode.com/${req.url}`,
      headers: req.headers.append('Authorization', 'MY JWY'),
    });

    return next.handle(request);
  }
}
