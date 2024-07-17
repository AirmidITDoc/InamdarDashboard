import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/components/material/material.module';
import { ToastService } from 'src/app/components/toast-notification/toast.service';
import { NumberDirective } from 'src/app/directives/number/number.directive';
import { PreventKeysDirective } from 'src/app/directives/prevent-keys/prevent-keys.directive';
import { AbsoluteRoutePipe } from 'src/app/pipes/absolute-route/absolute-route.pipe';
import { ErrorMessagePipe } from 'src/app/pipes/error-message/error-message.pipe';
import { EmptyValuePipe } from "../../../../pipes/empty-value/empty-value.pipe";
import { DashboardService } from '../../_services/dashboard.service';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexStroke,
  ApexChart,
  ApexGrid,
  ApexLegend,
  ApexPlotOptions,
  NgApexchartsModule,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

export type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
};


const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  NumberDirective,
  PreventKeysDirective,
  AbsoluteRoutePipe,
  RouterModule,
  ErrorMessagePipe,
  EmptyValuePipe,
  NgApexchartsModule
];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService],
  imports: [MODULES],
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent | any;
  public chartOptions!: Partial<ChartOptions> | any;
  @ViewChild("chart1") chart1!: ChartComponent | any;
  public chartOptions1!: Partial<ChartOptions1> | any;


  constructor(private _toast: ToastService, private _cs: DashboardService) {
    this.chartOptions = {
      series: [
        {
          name: "IPD",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
          name: "OPD",
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
          name: "Pharma",
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
      ],
      chart: {
        height: 500,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 4,
        curve: "straight",
        dashArray: [0, 0, 0]
      },
      // title: {
      //   text: "Page Statistics",
      //   align: "left"
      // },
      legend: {
        tooltipHoverFormatter: function(val:any, opts:any) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        }
      },
      markers: {
        size: 5,
        hover: {
          sizeOffset: 3
        }
      },
      xaxis: {
        labels: {
          trim: false
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function(val:any) {
                return val;
              }
            }
          },
          {
            title: {
              formatter: function(val:any) {
                return val;
              }
            }
          },
          {
            title: {
              formatter: function(val:any) {
                return val;
              }
            }
          }
        ]
      },
      grid: {
        borderColor: "#f1f1f1"
      }
    };

    this.chartOptions1 = {
      series: [
        {
          name: "IPD",
          data: [44, 55, 41, 64, 22, 43, 21]
        },
        {
          name: "OPD",

          data: [53, 32, 33, 52, 13, 44, 32]
        },
        {
          name: "PHARMA",

          data: [33, 52, 58, 42, 35, 15, 24]
        }
      ],
      chart: {
        type: "bar",
        height: 430
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: [2020, 2021, 2022, 2023, 2024]
      }
    };
  }
  showLoader = false;
  notData: boolean = false;
  //dataCompareList: any = [];
  dataCompareList = new MatTableDataSource([]);
  monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Decembe',
  ];
  currentYear = new Date().getFullYear();
  range = (start: any, stop: any, step: any) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  yearList = this.range(this.currentYear, this.currentYear - 4, -1);
  displayedColumns1: string[] = [
    'BillMonth',
    'IPD_B_TotalBillAmountSum',
    'OPD_B_TotalBillAmountSum',
    'PharmaOT',
    'TotalAmount',
  ];
  dataSource1 = new MatTableDataSource([]);
  payload1 = {
    SearchFields: [
      {
        FieldName: 'pDashboardId',
        FieldValue: '1',
        OpType: '13',
      },
      {
        FieldName: 'pFrequency',
        FieldValue: 'M',
        OpType: '13',
      },
      {
        FieldName: 'pStartYear',
        FieldValue: '2024',
        OpType: '13',
      },
    ],
    mode: 'MISDashboards',
  };

  displayedColumns2: string[] = [
    'BillMonth',
    'HospitalPatientCount',
    'HospitalPatientPer',
    'PrivatePatientCount',
    'PrivatePatientPer',
    'ReferalPatientCount',
    'ReferalPatientPer',
    'TotalPatientsCount',
  ];
  dataSource2 = new MatTableDataSource([]);
  payload2 = {
    SearchFields: [
      {
        FieldName: 'pDashboardId',
        FieldValue: '2',
        OpType: '13',
      },
      {
        FieldName: 'pFrequency',
        FieldValue: 'M',
        OpType: '13',
      },
      {
        FieldName: 'pStartYear',
        FieldValue: '2024',
        OpType: '13',
      },
    ],
    mode: 'MISDashboards',
  };

  displayedColumns3: string[] = [
    'DoctorName',
    'Jan_Patients',
    'Jan_Percentage',
    'Feb_Patients',
    'Feb_Percentage',
    'Mar_Patients',
    'Mar_Percentage',
    'Apr_Patients',
    'Apr_Percentage',
    'May_Patients',
    'May_Percentage',
    'Jun_Patients',
    'Jun_Percentage',
    'Jul_Patients',
    'Jul_Percentage',
    'TotalCount',
    'TotalPercentage',
  ];
  dataSource3 = new MatTableDataSource([]);
  payload3 = {
    SearchFields: [
      {
        FieldName: 'pDashboardId',
        FieldValue: '3',
        OpType: '13',
      },
      {
        FieldName: 'pFrequency',
        FieldValue: 'M',
        OpType: '13',
      },
      {
        FieldName: 'pStartYear',
        FieldValue: '2024',
        OpType: '13',
      },
    ],
    mode: 'MISDashboards',
  };

  displayedColumnsYear: string[] = [
    'BillYear',
    'IPD_B_TotalBillAmountSum',
    'OPD_B_TotalBillAmountSum',
    'PharmaOT',
    'TotalAmount',
  ];
  displayedYearData = new MatTableDataSource([]);
  payload4 = {
    SearchFields: [
      {
        FieldName: 'pDashboardId',
        FieldValue: '1',
        OpType: '13',
      },
      {
        FieldName: 'pFrequency',
        FieldValue: 'Y',
        OpType: '13',
      },
      {
        FieldName: 'pStartYear',
        FieldValue: '2024',
        OpType: '13',
      },
    ],
    mode: 'MISDashboards',
  };

  displayedMonthData: any[] = [
    { key: 'monthName', value: 'Month' },
    { key: 'ipd.2022', value: '2022' },
    { key: 'ipd.2023', value: '2023' },
    { key: 'ipd.2024', value: '2024' },
    { key: 'opd.2022', value: '2022' },
    { key: 'opd.2023', value: '2023' },
    { key: 'opd.2024', value: '2024' },
    { key: 'pharma.2022', value: '2022' },
    { key: 'pharma.2023', value: '2023' },
    { key: 'pharma.2024', value: '2024' },
    { key: 'total.2022', value: '2022' },
    { key: 'total.2023', value: '2023' },
    { key: 'total.2024', value: '2024' },
  ];
  displayedColumns: any[] = [
    'monthName',
    'ipd.2022',
    'ipd.2023',
    'ipd.2024',
    'opd.2022',
    'opd.2023',
    'opd.2024',
    'pharma.2022',
    'pharma.2023',
    'pharma.2024',
    'total.2022',
    'total.2023',
    'total.2024',
  ];
  ddlYear: any = [2024];
  selectedYearList: any = [2024];
  ddlSection: any = ['ipd', 'opd', 'pharma'];
  sectionList = this.ddlSection;
  selectedSectionList: any = ['ipd', 'opd', 'pharma'];
  displayedColumnsList: any[] = this.displayedColumns;
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataCompareListData: any = [];
  headerGroup: any = ['header-row-first-group'];

  ngOnInit(): void {
    this.getListing(this.payload1, 1);
    this.getListing(this.payload2, 2);
    this.getListing(this.payload3, 3);
    this.getListing(this.payload4, 4);
  }
  getListing(payLoad: any, type: number) {
    this.showLoader = true;
    this._cs.getDashboardListing(payLoad).subscribe(
      (response: any) => {
        if (response.StatusCode == 200) {
          this.setTableData(response, type);
        } else {
          this._toast.error(response.message);
        }
      },
      () => {
        this.showLoader = false;
      }
    );
  }
  setTableData(response: any, type: number) {
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
      case 4:
        this.displayedYearData = new MatTableDataSource(response.Data.Table);
        break;
    }
    if (type == 1) {
      this.dataCompareListData = [];
      let compareList = response.Data.Table;
      let yerList = this.selectedYearList;

      this.displayedMonthData = [{ key: 'monthName', value: 'Month' }];
      this.displayedColumns = [];
      let displayedMonthData: any = [];
      if (
        this.selectedSectionList.filter((s: string) => s == 'ipd')?.length > 0
      ) {
        this.headerGroup.push('header-row-sec-group');
        yerList.forEach((eleYear: any) => {
          displayedMonthData.push({
            key: 'ipd.' + eleYear,
            value: eleYear.toString(),
          });
        });
      }
      if (
        this.selectedSectionList.filter((s: string) => s == 'opd')?.length > 0
      ) {
        this.headerGroup.push('header-row-third-group');
        yerList.forEach((eleYear: any) => {
          displayedMonthData.push({
            key: 'opd.' + eleYear,
            value: eleYear.toString(),
          });
        });
      }
      if (
        this.selectedSectionList.filter((s: string) => s == 'pharma')?.length >
        0
      ) {
        this.headerGroup.push('header-row-forth-group');
        yerList.forEach((eleYear: any) => {
          displayedMonthData.push({
            key: 'pharma.' + eleYear,
            value: eleYear.toString(),
          });
        });
      }
      this.headerGroup.push('header-row-fifth-group');
      yerList.forEach((eleYear: any) => {
        displayedMonthData.push({
          key: 'total.' + eleYear,
          value: eleYear.toString(),
        });
      });
      this.displayedMonthData = Object.assign(
        [],
        [...this.displayedMonthData, ...displayedMonthData] || []
      );
      this.displayedColumns = Object.assign(
        [],
        this.displayedMonthData.map((s) => s.key) || []
      );
      this.columnsToDisplay = this.displayedColumns.slice();

      this.monthList.forEach((eleMonth: any, j: any) => {
        let obj: any = {
          month: j + 1,
          monthName: this.monthList[j],
          ipd: {},
          opd: {},
          pharma: {},
          total: {},
        };
        yerList.forEach((eleYear: any) => {
          let valData = compareList.find(
            (x: any) => x.BillMonth == j + 1 && x.BillYear == eleYear
          );
          obj['ipd'][eleYear] = valData?.IPD_B_TotalBillAmountSum || '';
          obj['opd'][eleYear] = valData?.OPD_B_TotalBillAmountSum || '';
          obj['pharma'][eleYear] = valData?.PharmaOT || '';
          obj['total'][eleYear] = valData?.TotalAmount || '';
        });
        this.dataCompareListData.push(obj);
      });
      this.dataCompareList = new MatTableDataSource(this.dataCompareListData);
    }

    if (!response.Data.Table) {
      this.notData = true;
    } else {
      this.notData = false;
    }
  }
  getValue(ele: any, col1: any, col2: any) {
    return !col2 ? ele[col1] : ele[col1][col2];
  }
  displayOn(val: string) {
    return this.selectedSectionList.filter((s: string) => s == val)?.length > 0
      ? true
      : false;
  }
  chekedOn(val: number) {
    return this.selectedYearList.filter((s: number) => s == val)?.length == 0 &&
      this.selectedYearList.length > 2
      ? true
      : false;
  }
  onYearChange(event: any = []) {
    let type = event?.value?.length > 0 ? event?.value : this.selectedYearList;
    this.selectedYearList = type;
    this.headerGroup = ['header-row-first-group'];
    this.getListing(this.payload1, 1);
  }
  onSectionChange(event: any) {
    let type = event?.value?.length > 0 ? event?.value : this.sectionList;
    this.selectedSectionList = type;
    this.headerGroup = ['header-row-first-group'];
    this.getListing(this.payload1, 1);
  }
  onSectionChangeYear(event: any) {
    let type = event?.value?.length > 0 ? event?.value : this.sectionList;
    this.selectedSectionList = type;
    this.displayedColumnsYear = [];
    this.displayedColumnsYear.push('BillYear');
    if (
      this.selectedSectionList.filter((s: string) => s == 'ipd')?.length > 0
    ) {
      this.displayedColumnsYear.push('IPD_B_TotalBillAmountSum');
    }
    if (
      this.selectedSectionList.filter((s: string) => s == 'opd')?.length > 0
    ) {
      this.displayedColumnsYear.push('OPD_B_TotalBillAmountSum');
    }
    if (
      this.selectedSectionList.filter((s: string) => s == 'pharma')?.length >
      0
    ) {
      this.displayedColumnsYear.push('PharmaOT');
    }
    this.displayedColumnsYear.push('TotalAmount');
  }
}
