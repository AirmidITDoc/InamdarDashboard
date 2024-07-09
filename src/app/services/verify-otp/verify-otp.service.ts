import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { tap, catchError, throwError, of } from 'rxjs';
import {
  VERIFY_OTP_API,
  FORGOT_PASSWORD_API,
} from 'src/app/constants/api-end-point';
import { ACCOUNT, RESET_PASSWORD } from 'src/app/constants/routes';
import { forgotScreen, infoKey } from 'src/app/constants/storage-keys';
import { CommonService } from '../common/common.service';
import { HttpService } from '../http/http.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class VerifyOtpService {
  constructor(
    private _http: HttpService,
    private _common: CommonService,
    private _storage: StorageService
  ) {}

  verifyOtp(data: any, screenType?: any) {
    return this.otpVerification(data, screenType);
  }

  otpVerification(data: any, screenType?: string) {
    return this._http.post(VERIFY_OTP_API, data).pipe(
      tap((res: any) => {
        if (screenType && screenType == atob(forgotScreen)) {
          this._common.navigate([ACCOUNT, RESET_PASSWORD, res.data['token']]);
        } else {
          this._storage.loginSuccessfully(res, 'OTP');
        }
      }),
      catchError((err) => throwError(err))
    );
  }

  reSendOtp(info: any, screenType?: any) {
    return this._http.post(FORGOT_PASSWORD_API, info).pipe(
      tap((res) => {}),
      catchError((err) => throwError(err))
    );
  }
}

@Injectable()
export class VerifyRouteResolveService implements Resolve<any> {
  constructor(private _router: Router) {}
  resolve() {
    const info = localStorage.getItem(infoKey);
    if (!info) {
      this._router.navigate(['']);
      return of([false]);
    }
    return of(info);
  }
}
