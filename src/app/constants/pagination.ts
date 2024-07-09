import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';

export class Pagination {
  API_EVENT = {
    defaultLimit: 100,
    delete: 'deleted',
    deleteByAdmin: 'deleted_by_admin',
    active: 'active',
    block: 'blocked',
    edit: 'EDIT',
    verify: 'verified',
    unverified: 'unverified',
    report: 'report',
    unreport: 'unreport',
    inactive: 'inactive',
    rating: 'rating',
    sessionHistory: 'session history',
  };
  today: Date = new Date();
  total: number = 0;
  nextHit: number = 0;
  pageNo: number;
  limit: number;
  search!: string;
  pageOptions: number[];
  filterOptions: { [key: string]: string | any } = {};
  sortCriteria: string | null = 'created';
  sortBy: number | null = 0;
  type!: string;
  statusType!: string;
  permissionClass: string = '';

  constructor() {
    this.total = 0;
    this.pageNo = 1;
    this.limit = 100;
    this.pageOptions = [100, 200, 400, 600, 800, 1000];
  }

  get pageParams() {
    return {
      pageNo: this.pageNo,
      limit: this.limit,
    };
  }

  get searchFilter() {
    return { searchKey: this.search };
  }

  get sortHeaders() {
    return {
      sortCriteria: this.sortCriteria,
      sortBy: this.sortBy,
    };
  }

  get typeOf() {
    return {
      type: this.type,
      status: this.statusType,
    };
  }

  confirmPageReload() {}

  allPrams() {
    return {
      ...this.typeOf,
      ...this.pageParams,
      ...this.filterOptions,
      ...this.searchFilter,
      ...this.sortHeaders,
    };
  }

  normalPrams() {
    return {
      ...this.pageParams,
      ...this.filterOptions,
      ...this.searchFilter,
    };
  }

  /**
   * @description This function checks if page needs to be decreased on row deletion
   */
  validateDeletion() {
    if (this.total !== 1 && this.total - (this.pageNo - 1) * this.limit === 1) {
      this.pageNo--;
      this.total--;
    }
  }

  get validPageOptions() {
    const dataObj: any = this.allPrams();
    const mainOption: any = {};
    for (const i of Object.keys(dataObj)) {
      if (dataObj[i] || dataObj[i] === 0) {
        mainOption[i] = dataObj[i];
      }
    }
    return mainOption;
  }

  get params() {
    const dataObj: any = this.normalPrams();
    const mainOption: any = {};
    for (const i of Object.keys(dataObj)) {
      if (dataObj[i] || dataObj[i] === 0) {
        mainOption[i] = dataObj[i];
      }
    }
    return mainOption;
  }

  set pageOptionsOnChange(options: MatPaginator | any) {
    this.pageNo = options.pageIndex + 1;
    this.limit = options.pageSize;
  }

  set sortOptions(sortOption: Sort) {
    if (sortOption.direction) {
      this.sortCriteria = sortOption.active;
      this.sortBy = sortOption.direction === 'asc' ? 1 : 0;
    } else {
      this.sortCriteria = null;
      this.sortBy = null;
    }
  }

  currentIndex(index: number): number {
    return (this.pageNo - 1) * this.limit + index + 1;
  }

  resetPages() {
    this.pageNo = 1;
    this.nextHit = 0;
  }
}
