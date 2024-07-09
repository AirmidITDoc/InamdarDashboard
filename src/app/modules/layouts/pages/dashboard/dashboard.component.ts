import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NumberDirective } from 'src/app/directives/number/number.directive';
import { PreventKeysDirective } from 'src/app/directives/prevent-keys/prevent-keys.directive';
import { AbsoluteRoutePipe } from 'src/app/pipes/absolute-route/absolute-route.pipe';
import { ErrorMessagePipe } from 'src/app/pipes/error-message/error-message.pipe';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/components/material/material.module';
import { ToastService } from 'src/app/components/toast-notification/toast.service';
import { DashboardService } from '../../_services/dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { EmptyValuePipe } from "../../../../pipes/empty-value/empty-value.pipe";

const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  MaterialModule,
  NumberDirective,
  PreventKeysDirective,
  AbsoluteRoutePipe,
  RouterModule,
  ErrorMessagePipe,
];

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DashboardService],
    imports: [MODULES, EmptyValuePipe]
})
export class DashboardComponent implements OnInit {
  constructor(private _toast: ToastService, private _cs: DashboardService) {}
  showLoader = false;
  notData: boolean = false;

  displayedColumns1: string[] = ['BillMonth', 'IPD_B_TotalBillAmountSum', 'OPD_B_TotalBillAmountSum','PharmaOT','TotalAmount'];
  dataSource1 = new MatTableDataSource([]);
  payload1 = {
    "SearchFields": [
      {
        "FieldName": "pDashboardId",
        "FieldValue": "1",
        "OpType": "13"
      },
      {
        "FieldName": "pFrequency",
        "FieldValue": "M",
        "OpType": "13"
      },
      {
        "FieldName": "pStartYear",
        "FieldValue": "2024",
        "OpType": "13"
      }
    ],
    "mode": "MISDashboards"
  };

  displayedColumns2: string[] = ['BillMonth', 'HospitalPatientCount', 'HospitalPatientPer','PrivatePatientCount','PrivatePatientPer','ReferalPatientCount','ReferalPatientPer','TotalPatientsCount'];
  dataSource2 = new MatTableDataSource([]);
  payload2 = {
    "SearchFields": [
      {
        "FieldName": "pDashboardId",
        "FieldValue": "2",
        "OpType": "13"
      },
      {
        "FieldName": "pFrequency",
        "FieldValue": "M",
        "OpType": "13"
      },
      {
        "FieldName": "pStartYear",
        "FieldValue": "2024",
        "OpType": "13"
      }
    ],
    "mode": "MISDashboards"
  };

  displayedColumns3: string[] = ['DoctorName', 'Jan_Patients', 'Jan_Percentage','Feb_Patients','Feb_Percentage', 'Mar_Patients', 'Mar_Percentage', 'Apr_Patients','Apr_Percentage','May_Patients', 'May_Percentage', 'Jun_Patients', 'Jun_Percentage','Jul_Patients','Jul_Percentage','TotalCount','TotalPercentage'
  ];
  dataSource3 = new MatTableDataSource([]);
  payload3 = {
    "SearchFields": [
      {
        "FieldName": "pDashboardId",
        "FieldValue": "3",
        "OpType": "13"
      },
      {
        "FieldName": "pFrequency",
        "FieldValue": "M",
        "OpType": "13"
      },
      {
        "FieldName": "pStartYear",
        "FieldValue": "2024",
        "OpType": "13"
      }
    ],
    "mode": "MISDashboards"
  };

  ngOnInit(): void {
    this.getListing(this.payload1,1);
    this.getListing(this.payload2,2);
    this.getListing(this.payload3,3);
  }
  getListing(payLoad:any,type:number) {
    this.showLoader = true;
    this._cs.getDashboardListing(payLoad).subscribe(
      (response: any) => {
        if (response.StatusCode == 200) {
          this.setTableData(response,type);
        } else {
          this._toast.error(response.message);
        }
      },
      () => {
        this.showLoader = false;
      }
    )
  }
  setTableData(response:any,type:number) {
    this.showLoader = false;
    switch (type) {
      case 1:
        this.dataSource1 = new MatTableDataSource(response.Data.Table);
        break;
      case 2:
        this.dataSource2 = new MatTableDataSource(response.Data.Table);
        break;
      case 3:
        this.dataSource3 = new MatTableDataSource(response.Data.Table);
        break;
    }
    if (!response.Data.Table) {
      this.notData = true;
    } else {
      this.notData = false;
    }
  }
}
