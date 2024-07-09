import { Pipe, PipeTransform } from '@angular/core';
import { BANNER_TEMPLATE_TYPE } from 'src/app/constants/messages';
import { Pagination } from 'src/app/constants/pagination';

@Pipe({
  name: 'formatStatus',
  standalone: true,
})
export class FormatStatusPipe extends Pagination implements PipeTransform {
  transform(value: any, extraArgument?: string): any {
    if (extraArgument === 'active-inactive') {
      switch (value) {
        case this.API_EVENT.inactive:
          return 'Blocked';
        case this.API_EVENT.active:
          return 'Active';
        default:
          return '-';
      }
    } else {
      switch (value) {
        case this.API_EVENT.block:
          return 'Blocked';
        case this.API_EVENT.active:
          return 'Unblocked';
        case this.API_EVENT.delete:
          return 'Deleted';
        case this.API_EVENT.deleteByAdmin:
          return 'Admin Deleted';
        case this.API_EVENT.inactive:
          return 'Reported';
        case BANNER_TEMPLATE_TYPE[0].value:
          return BANNER_TEMPLATE_TYPE[0].name;
        case BANNER_TEMPLATE_TYPE[1].value:
          return BANNER_TEMPLATE_TYPE[1].name;
        case BANNER_TEMPLATE_TYPE[2].value:
          return 'Before & After Login';

        default:
          return '-';
      }
    }
  }
}
