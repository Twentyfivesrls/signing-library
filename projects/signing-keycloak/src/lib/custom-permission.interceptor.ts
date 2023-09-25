import {Inject, Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomPermissionInterceptor implements HttpInterceptor {

  private environment: any = {
    clientid: 'external-client-fe'
  };

/*  constructor(@Inject('envconfig') envconfig: any) {
    this.environment = envconfig;
  } */

  // environment.clientid  -- external-client-fe

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      headers: request.headers.set('my-permission', this.environment.clientid)
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
