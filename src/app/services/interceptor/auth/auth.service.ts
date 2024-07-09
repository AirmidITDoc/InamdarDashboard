import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from '../../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _storage: StorageService) {}

  authorization() {
    const token = this._storage.token;
    const auth: any = {
      Authorization: token
        ? 'Bearer ' + token
        : 'Basic ' + btoa(`${'FiitJeeApp'}:${'FiitJeeApp@123'}`),
      api_key: environment.API_KEY,
      platform: '' + this._storage.deviceDetail(3),
      timezone: '' + this._storage.deviceDetail(4),
    };
    return auth;
  }
}
