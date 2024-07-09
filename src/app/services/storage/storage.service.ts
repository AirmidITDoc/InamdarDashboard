import { Injectable } from '@angular/core';
import { userId } from '../../constants/storage-keys';
import { USER_INFO_API } from '../../constants/api-end-point';
import { Router } from '@angular/router';
import { ACCOUNT, DASHBOARD } from '../../constants/routes';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  profileDetail: any;
  constructor(private _router: Router, private _http: HttpService) {}
  setUserToken(token: any) {
    localStorage.setItem('session_token', token);
  }
  get token() {
    return localStorage.getItem('session_token');
  }

  getProfileDetail(showLoader = true) {
    return new Promise((resolve, reject) => {
      if (this.profileDetail) {
        resolve(this.profileDetail);
      } else {
        this._http
          .get(USER_INFO_API, '', showLoader)
          .toPromise()
          .then(
            (response: any) => {
              console.log(response);
              this.profileDetail = response.data;
              resolve(this.profileDetail);
            },
            (error) => {
              reject(error);
            }
          );
      }
    });
  }
  logout() {
    localStorage.clear();
    setTimeout(() => {
      this.profileDetail = null;
    }, 1000); // this is used for avoid random reflection on side bar if logout
    this._router.navigate([ACCOUNT]);
  }

  loginSuccessfully(response: any, responeFrom = '') {
    this.setUserToken(response.data.accessToken);
    localStorage.setItem(userId, btoa(response.data._id));
    this._router.navigate([DASHBOARD]);
  }

  deviceDetail(info?: number) {
    /*---1=device_token, 2=deviceId, 3=platform---*/
    switch (info) {
      case 1:
        let deviceToken = this.attachDeviceToken();
        return deviceToken;
      case 2:
        let deviceId = this.randomDeviceId();
        return deviceId;
      case 3:
        return '3';
      default:
        return this.getTimeZone();
    }
  }

  attachDeviceToken() {
    return (Date.now() + Math.floor(Math.random() * 1000000) + 1).toString();
  }

  randomDeviceId() {
    return window.navigator.userAgent.replace(/\D+/g, '');
  }

  getTimeZone() {
    let date = new Date();
    let offset = date.getTimezoneOffset() * -1;
    return offset * 60 * 1000;
  }
}
