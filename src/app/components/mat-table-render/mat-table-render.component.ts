import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { TableService } from './table.service';
import { DataLoaderComponent } from '../data-loader/data-loader.component';
import { LazyImageComponent } from '../lazy-image/lazy-image.component';
import { ResultNotFoundComponent } from '../result-not-found/result-not-found.component';
import { SearchRenderComponent } from '../search-render/search-render.component';
import { FilterComponent } from './filter/filter.component';
import { EmptyValuePipe } from 'src/app/pipes/empty-value/empty-value.pipe';
import { FormatStatusPipe } from 'src/app/pipes/format-status/format-status.pipe';
import { Subscription } from 'rxjs';
import {
  DATE_TYPES,
  LISTING_COMMON_MESSAGES,
} from 'src/app/constants/messages';
import { Pagination } from 'src/app/constants/pagination';
import { CommonService } from 'src/app/services/common/common.service';
import { MatIconModule } from '@angular/material/icon';
import { slideInDownAnimation } from './filter-animation';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { ToastService } from '../toast-notification/toast.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';
import { VedioPlayerComponent } from '../vedio-player/vedio-player.component';
import { StorageService } from 'src/app/services/storage/storage.service';
import { HEALTHY_RECOMMENDATION } from 'src/app/constants/routes';

const ELEMENT_DATA: any = [];
@Component({
  selector: 'mat-table-render',
  standalone: true,
  animations: [slideInDownAnimation],
  imports: [
    CommonModule,
    MatIconModule,
    SearchRenderComponent,
    RouterModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTooltipModule,
    MatSortModule,
    ConfirmationModalComponent,
    ResultNotFoundComponent,
    FilterComponent,
    EmptyValuePipe,
    LazyImageComponent,
    MatButtonToggleModule,
    DataLoaderComponent,
    MatMenuModule,
    FormatStatusPipe,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './mat-table-render.component.html',
  styleUrls: ['./mat-table-render.component.scss'],
})
export class MatTableRenderComponent
  extends Pagination
  implements OnInit, OnDestroy
{
  isOpen = false;
  matHeaderRow: any = [];
  notData: boolean = false;
  length = 0;
  pageSize = 10;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  subscriptions: Subscription[] = [];
  dateType = DATE_TYPES;
  showLoader = false;
  isActive: any;
  @Input() pageType: any;
  @Input() openFilter: boolean = false;
  @Input() cls!: string;
  @Input() hideFilter: boolean = true;
  @Input() hideSearch: boolean = true;
  @Input() addCustomClass: string = 'removeExportBtn';
  @Input() heading: any = [];
  @Input() notFound!: string;
  @Input() removeId: number = -1;
  @Input() placeholder: string = 'Search';
  @Input() listType: string = '';
  @Input() isPageForBulkOperation = false;
  @Input() dataFromPerent: boolean = false;
  @Input() noAddButton = true;
  @Input()
  componentName!: string;
  @Input() ClinicianType: string = 'delivery';
  @Input() isTab = false;
  @Input() hideStatus = true;
  @Input() hideAppointment = true;
  @Input() Export: boolean = true;
  @Input() set tableData(value: any) {
    if (value) {
      this.setTableData(value);
    }
  }
  @Output() csvdata: EventEmitter<any> = new EventEmitter();
  @Output() page: EventEmitter<any> = new EventEmitter();
  @Output() find: EventEmitter<any> = new EventEmitter();
  @Output() sort: EventEmitter<any> = new EventEmitter();
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() status: EventEmitter<any> = new EventEmitter();
  @Output() filter: EventEmitter<any> = new EventEmitter();
  @Output() open: EventEmitter<any> =
    new EventEmitter(); /*--open close filter--*/
  @Output() export: EventEmitter<any> = new EventEmitter();
  @Output() detailInPopup: EventEmitter<any> = new EventEmitter();
  @Output() bulkOperation: EventEmitter<any> = new EventEmitter();
  @Output() tabEvent: EventEmitter<any> = new EventEmitter();
  @ViewChild('paginator') paginator!: MatPaginator;
  statusOptions: string[] = ['Completed', 'Upcoming', 'Canceled'];
  appointmentOption: string[] = ['Tele-visit', 'In-person'];
  constructor(
    private _table: TableService,
    private _dialog: MatDialog,
    public storage: StorageService,
    public common: CommonService,
    private _toast: ToastService,
    private _router: Router,
    private readonly sanitizer: DomSanitizer
  ) {
    super();
  }

  ngOnInit() {
    this.showLoader = true;
    this.matHeaderRow.push('S. No.');
    this.heading.forEach((item: { heading: any }) => {
      this.matHeaderRow.push(item.heading);
    });
    this.heading.push({ heading: 'S. No.', key: 's_no' });
    if (!this.dataFromPerent) {
      this.TableDatObserve();
    }
    this.notFoundErrorHandler(respond.found);
  }

  TableDatObserve() {
    this.subscriptions.push(
      this._table.tableObserve.subscribe((response: any) => {
        this.setTableData(response);
      })
    );
  }

  setTableData(response: {
    data: any[] | undefined;
    limit: number;
    pageNo: number;
    total: number;
  }) {
    this.showLoader = false;
    response.data?.forEach((list: { [x: string]: any }, index: number) => {
      list['s_no'] = response.limit * (response.pageNo - 1) + (index + 1);
    });
    this.dataSource = new MatTableDataSource(response.data);
    this.length = response.total;
    this.pageSize = response.limit;
    if (response.data?.length == 0) {
      this.notData = true;
    } else {
      this.notData = false;
    }
  }

  /**
   * @param text common not found text handel
   */
  notFoundErrorHandler(text: string) {
    if (this.notFound) {
      const notFoundText = this.notFound.split(' ');
      if (
        notFoundText[notFoundText.length - 1].toLowerCase() == respond.added ||
        notFoundText[notFoundText.length - 1].toLowerCase() == respond.found
      ) {
        notFoundText[notFoundText.length - 1] = text;
        this.notFound = notFoundText.join(' ');
      }
    }
  }

  async onNaviagateDetailsPage(element: any, link: any, id: any) {
    if (link == HEALTHY_RECOMMENDATION.path) {
      console.log(element);
      if (element.mediaType == 'Video') {
        let reqData: any = {
          name: element.title,
          url: element.media,
          thumbnail: element.media?.thumbnailFile,
        };

        const dialog = this._dialog.open(VedioPlayerComponent, {
          panelClass: 'account-popup',
          width: '750px',
          data: reqData,
        });
      } else if (element.mediaType == 'Link') {
        window.open(element.media, 'Url');
      } else {
        let pdfUrl: any = await this.sanitizer.bypassSecurityTrustResourceUrl(
          element?.media
        );
        const dialog = this._dialog.open(PdfViewerComponent, {
          panelClass: 'account-popup',
          width: '850px',
          data: {
            name: element.title,
            pdf: pdfUrl,
          },
        });
      }
    } else {
      this._router.navigate([link, element._id]);
      return;
    }
  }

  onPageHandler(ev: any) {
    this.page.emit(ev);
  }

  //

  underDevelopment() {
    //this.csvdata.emit(true);
    //this._toast.info("Under Development");
  }
  onSelectionChange(data: { value: any }) {
    this.csvdata.emit(data.value);
  }
  onGettingList(filter: string, componentName?: string) {
    if (componentName == 'Menu’s') {
      this.ClinicianType = filter;
    } else {
      this.isActive = filter;
    }
    this.filter.emit(filter);
    this.tabEvent.emit(filter);
  }

  //
  searchTable(search: string) {
    this.find.emit(search);
    if (search == '') {
      this.notFoundErrorHandler(respond.added);
    } else {
      this.notFoundErrorHandler(respond.found);
    }
  }

  addListing(status: number, data?: any) {
    /*--0=add, +1=edit--*/
    this.add.emit({ id: status, data: data });
  }

  exportList() {
    this.export.emit(true);
  }

  sortingData(event: { active: any }) {
    for (let find = 0; find < this.heading.length; find++) {
      if (this.heading[find].heading == event.active) {
        event.active = this.heading[find].key;
        break;
      }
    }
    this.sort.emit(event);
  }

  changeStatus(id: number, data: any, index: any, listType?: any) {
    const body = {
      id: id,
      index: index,
      data: data,
    };
    switch (id) {
      case 1:
        this.status.emit(body);
        break;

      case 4:
        this.status.emit(body); // form sending notification
        break;

      default:
        this.confirmationDialog(id, body, listType);
        break;
    }
  }

  tableFilter(isOpen: boolean) {
    this.isOpen = isOpen;
    this.open.emit(this.isOpen);
  }
  confirmationDialog(id: number, body: any, listType?: string) {
    let msg = true;
    let message = `${LISTING_COMMON_MESSAGES.DELETE_MSG} this ${listType}?`;
    let title = `${LISTING_COMMON_MESSAGES.DELETE_TITLE}`;
    body['action'] = this.API_EVENT.delete;
    if (listType != 'Clinician') {
      msg = false;
      if (listType == 'patient') {
        msg = true;
      }
    }

    if (id == 2) {
      if (body.data.status == this.API_EVENT.active) {
        msg = true;
        message =
          listType && body.data.status == this.API_EVENT.active
            ? `${LISTING_COMMON_MESSAGES.INACTIVATE_MSG} this ${listType}?`
            : `${LISTING_COMMON_MESSAGES.BLOCK_MSG}`;
        title =
          listType && body.data.status == this.API_EVENT.active
            ? `${LISTING_COMMON_MESSAGES.BLOCK_TITLE} ${listType}`
            : `${LISTING_COMMON_MESSAGES.INACTIVATE_TITLE} ${listType}`;
        body['action'] = this.API_EVENT.block;
        if (listType != 'Clinician') {
          msg = false;
          if (listType == 'patient') {
            msg = true;
          }
        }
      } else {
        msg = false;
        message =
          listType && body.data.status == this.API_EVENT.block
            ? `${LISTING_COMMON_MESSAGES.ACTIVE_MSG} this ${listType}?`
            : `${LISTING_COMMON_MESSAGES.ACTIVATE_MSG} this ${listType}?`;
        title =
          listType && body.data.status == this.API_EVENT.block
            ? `${LISTING_COMMON_MESSAGES.ACTIVE_TITLE} ${listType}`
            : `${LISTING_COMMON_MESSAGES.ACTIVATE_TITLE} ${listType}`;
        body['action'] = this.API_EVENT.active;
      }
    }

    const dialog = this._dialog.open(ConfirmationModalComponent, {
      panelClass: 'account-popup',
      width: '480px',
      data: {
        title: title,
        message: message,
        note: msg,
        listType:
          body.action == this.API_EVENT.block ||
          body.action == this.API_EVENT.delete
            ? this.listType
            : '',
      },
    });
    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.status.emit(body);
      }
    });
  }

  applyFilter(event: { apply: null }) {
    if (event.apply == null) {
      this.notFoundErrorHandler(respond.added);
      this.tableFilter(false);
    } else {
      if (event.apply) {
        this.notFoundErrorHandler(respond.found);
      } else {
        this.notFoundErrorHandler(respond.added);
      }
      this.tableFilter(false);
      this.filter.emit(event);
    }
  }
  onStatusChange(data: any) {}
  onTypeChange(data: any) {}

  /**
   * @UNSUBSCRIPTION Unsubscribe all subscriptions to avoid memory leak
   */
  ngOnDestroy() {
    if (this.subscriptions.length > 0) {
      this.common.unsubscribe(this.subscriptions);
    }
  }
}

enum respond {
  added = 'added!',
  found = 'found!',
}
