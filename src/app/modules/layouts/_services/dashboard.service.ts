import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Injectable()
export class DashboardService {

  constructor(private _http: HttpService) { }

  getDashboardListing(body: any, showLoader = true) {
    return this._http.post("Common", body, showLoader);
  }
}
