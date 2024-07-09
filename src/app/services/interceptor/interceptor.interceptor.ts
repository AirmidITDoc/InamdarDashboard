import { Injectable, InjectionToken, Inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { map, catchError, finalize, timeout } from 'rxjs/operators';
import { LoaderService } from 'src/app/components/loader/loader.service';
import { ToastService } from 'src/app/components/toast-notification/toast.service';
import { StorageService } from '../storage/storage.service';
import { CryptoService } from '../crypto/crypto.service';
import { AuthService } from './auth/auth.service';
import { retryWithBackOff } from 'src/app/constants/retryApiWithBackOff';
import { ACCOUNT } from 'src/app/constants/routes';
import { INTERNAL_SERVER_ERROR, NO_INTERNET } from 'src/app/constants/messages';

export const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor(
    @Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number,
    private _auth: AuthService,
    private _toast: ToastService,
    private _ls: LoaderService,
    private _store: StorageService,
    private _router: Router,
    private _crypto: CryptoService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> | any {
    const timeoutValue =
      Number(req.headers.get('timeout')) || this.defaultTimeout;

    let authReq = req.clone({ setHeaders: this._auth.authorization() });

    if (authReq.body !== null) {
      //let encrypted = this._crypto.encryptValue(authReq.body);
      let encrypted = (authReq.body);
      // authReq = req.clone({
      //   body: { data: encrypted },
      //   ...{ setHeaders: this._auth.authorization() },
      // });
      authReq = req.clone({
        body: encrypted,
        ...{ setHeaders: this._auth.authorization() },
      });
    }

    return next.handle(authReq).pipe(
      retryWithBackOff(),
      timeout(timeoutValue),
      map((event: HttpEvent<any>): any => {
        if (event instanceof HttpResponse) {
          this._ls.hide();
          if (event.body && event.body.data) {
            //let decipher = this._crypto.decryptValue(event.body.data);
            let decipher = (event.body.data);
            if (decipher) {
              let data = JSON.parse(decipher.toString());
              return event.clone({
                body: { data: data.result },
              });
            } else {
              return event.clone({
                body: { data: event.body.data },
              });
            }
          } else {
            return event;
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 403) {
          //let err: any = this._crypto.decryptValue(error.error.error);
          let err: any = (error.error.error);
          err = JSON.parse(err);
          localStorage.clear();
          this._router.navigate([ACCOUNT.path]);
          this.errorState(err.message);
        }

        if (error.error && error.error.data) {
          //let decipher = this._crypto.decryptValue(error.error.data);
          let decipher = (error.error.data);
          let formatData = { body: { data: JSON.parse(decipher.toString()) } };
          this.errorState(error, formatData.body.data);
          return throwError(formatData.body.data);
        } else {
          this.errorState(error);
          return throwError(error);
        }
      }),
      finalize(() => {
        this._ls.hide();
      })
    );
  }

  errorState(error: any, data?: any) {
    //let err = JSON.parse(this._crypto.decryptValue(error.error.error));
    let err = JSON.parse((error.error.error));
    this._ls.hide();
    // if (error.status == 0) {
    //   if (!navigator.onLine) {
    //     this._toast.error(NO_INTERNET);
    //   } else {
    //     this._toast.error(INTERNAL_SERVER_ERROR);
    //   }
    // } else if (error.status == 401) {
    //   this._toast.error(data ? data.message : err.message);
    //   this._store.logout();
    // } else if (error.status == 404) {
    //   this._toast.error(data ? data.message : err.message);
    //   this._router.navigate(['404']);
    // } else {
    //   this._toast.error(data ? data.message : err.message);
    // }
  }
}
