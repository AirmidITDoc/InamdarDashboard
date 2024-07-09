import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  data = new Subject<any>();
  constructor() {}

  setBreadcrumb(e: any) {
    this.data.next(e);
  }
}
