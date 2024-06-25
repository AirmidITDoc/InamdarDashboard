import { Injectable } from '@angular/core';
import {
  ChartData,
  ChartDataset,
  ChartOptions,
  ChartType,
  PluginOptionsByType,
  ScaleOptions,
  TooltipLabelStyle
} from 'chart.js';
import { DeepPartial } from 'chart.js/dist/types/utils';
import { getStyle, hexToRgba } from '@coreui/utils';

export interface IChartProps {
  data?: ChartData;
  labels?: any;
  options?: ChartOptions;
  colors?: any;
  type: ChartType;
  legend?: any;

  [propName: string]: any;
}

@Injectable({
  providedIn: 'any'
})
export class DashboardChartsData {
  constructor() {
    this.initMainChart();
  }

  public mainChart: IChartProps = { type: 'line' };
  public mainChart1: IChartProps = { type: 'line' };
  public mainChart2: IChartProps = { type: 'line' };

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  Months = ['Jan-23', 'Feb-23', 'Mar-23', 'Apr-23', 'May-23', 'Jun-23', 'Jul-23', 'Aug-23', 'Sep-23', 'Oct-23', 'Nov-23', 'Dec-23', 'Jan-24', 'Feb-24', 'Mar-24', 'Apr-24', 'May-24', 'Jun-24', 'Jul-24', 'Aug-24', 'Sep-24', 'Oct-24', 'Nov-24', 'Dec-24'];
  MonthIpdData = [55389120, 42987013, 49470602, 38942424, 39549196, 47393187, 51846875, 61205088, 58050574, 56484136, 48189690, 47139669, 55389120, 42987013, 49470602, 47393187, 51846875, 61205088, 58050574, 56484136, 48189690, 47139669, 55389120, 42987013];
  MonthOpdData = [7881245, 9116840, 9620287, 10085338, 9901337, 9255383, 9508793, 8274872, 9642178, 9893453, 8863995, 8461478, 7881245, 9116840, 9620287, 10085338, 9901337, 9255383, 9508793, 8274872, 9642178, 9893453, 8863995, 8461478];
  MonthPharmacyData = [1531190, 1746683, 1893454, 1956622, 2177331, 2006552, 2906062, 2093469, 2081006, 2343455, 1993108, 2742389, 1531190, 1746683, 1893454, 1956622, 2177331, 2006552, 2906062, 2093469, 2081006, 2343455, 1993108, 2742389];
  Days = [] as string[];
  Years = ['2023', '2024'];
  Cat1Data = [1321, 1339, 1791, 2198];
  Cat2Data = [1258, 1859, 1814, 1757];
  Cat3Data = [1496, 2002, 2617, 2504];
  PopulateDays() {
    this.Days = [];
    let currentDate = new Date('2023-01-01');
    while (currentDate <= new Date('2024-12-31')) {
      let d = new Date(currentDate);
      this.Days.push(d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear());
      currentDate.setUTCDate(currentDate.getUTCDate() + 1);
    }
  }
  initMainChart(period: string = 'Month') {
    const brandSuccess = getStyle('--cui-success') ?? '#4dbd74';
    const brandInfo = getStyle('--cui-info') ?? '#20a8d8';
    const brandInfoBg = hexToRgba(getStyle('--cui-info') ?? '#20a8d8', 10);
    const brandDanger = getStyle('--cui-danger') ?? '#f86c6b';
    // mainChart
    if (period === 'Month')
      this.mainChart['elements'] = this.Months.length;
    else if (period === 'Day') {
      this.PopulateDays();
      this.mainChart['elements'] = this.Days.length;
    }
    else
      this.mainChart['elements'] = this.Years.length;
    this.mainChart['Data1'] = [];
    this.mainChart['Data2'] = [];
    this.mainChart['Data3'] = [];

    // generate random values for mainChart
    if (period === 'Month') {
      this.mainChart['Data1'] = this.MonthIpdData;
      this.mainChart['Data2'] = this.MonthOpdData;
      this.mainChart['Data3'] = this.MonthPharmacyData;
    }
    else {
      for (let i = 0; i <= this.mainChart['elements']; i++) {
        this.mainChart['Data1'].push(this.random(1000000, 240000000));
        this.mainChart['Data2'].push(this.random(20000000, 160000000));
        this.mainChart['Data3'].push(this.random(20000000, 160000000));
      }
    }
    let labels: string[] = [];
    if (period === 'Month') {
      labels = this.Months;
    }
    else if (period === 'Day') {
      labels = this.Days;
    }
    else {
      labels = this.Years;
    }

    const colors = [
      {
        // brandInfo
        backgroundColor: brandInfoBg,
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        fill: true
      },
      {
        // brandSuccess
        backgroundColor: 'transparent',
        borderColor: brandSuccess || '#4dbd74',
        pointHoverBackgroundColor: '#fff'
      },
      {
        // brandDanger
        backgroundColor: 'transparent',
        borderColor: brandDanger || '#f86c6b',
        pointHoverBackgroundColor: brandDanger,
        borderWidth: 1,
        //borderDash: [8, 5]
      }
    ];

    const datasets: ChartDataset[] = [
      {
        data: this.mainChart['Data1'],
        label: 'IPD',
        ...colors[0]
      },
      {
        data: this.mainChart['Data2'],
        label: 'OPD',
        ...colors[1]
      },
      {
        data: this.mainChart['Data3'],
        label: 'Pharmacy',
        ...colors[2]
      }
    ];

    const plugins: DeepPartial<PluginOptionsByType<any>> = {
      legend: {
        display: true
      },
      tooltip: {
        callbacks: {
          labelColor: (context) => ({ backgroundColor: context.dataset.borderColor } as TooltipLabelStyle)
        }
      }
    };

    //const scales = this.getScales();

    const options: ChartOptions = {
      maintainAspectRatio: false,
      plugins,
      //scales,
      elements: {
        line: {
          tension: 0.4
        },
        // point: {
        //   radius: 0,
        //   hitRadius: 10,
        //   hoverRadius: 4,
        //   hoverBorderWidth: 3
        // }
      }
    };

    this.mainChart.type = 'line';
    this.mainChart.options = options;
    this.mainChart.data = {
      datasets,
      labels
    };
    const datasets1: ChartDataset[] = [
      {
        data: this.Cat1Data,
        label: 'Hospital',
        ...colors[0]
      },
      {
        data: this.Cat2Data,
        label: 'Private Patient',
        ...colors[1]
      },
      {
        data: this.Cat3Data,
        label: 'Refferal',
        ...colors[2]
      }
    ];
    let categorylables: string[] = ['FY 2020-21', 'FY 2021-22', 'FY 2022-23 (Apr to Mar)', 'FY 2023-24 (Apr to Mar)'];
    this.mainChart1.data={
       datasets:datasets1,
       labels:categorylables
    }

    const datasets2: ChartDataset[] = [
      {
        data: [2394,2373,1672,1552,1630,1785,1836,1429,1287,1531,1694,1307],
        label: 'FY 2021-22',
        ...colors[0]
      },
      {
        data: [1064,1204,1473,1646,2430,2278,1815,1560,1768,1538,1635,1943],
        label: 'FY 2022-23',
        ...colors[1]
      },
      {
        data: [1297,1269,1516,1746,2144,2102,1928,1620,1550,1917,1593,1568],
        label: 'FY 2023-24',
        ...colors[2]
      }
    ];
    let categorylables1: string[] = ['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'];
    this.mainChart2.data={
       datasets:datasets2,
       labels:categorylables1
    }
  }

  getScales() {
    const colorBorderTranslucent = getStyle('--cui-border-color-translucent');
    const colorBody = getStyle('--cui-body-color');

    const scales: ScaleOptions<any> = {
      x: {
        grid: {
          color: colorBorderTranslucent,
          drawOnChartArea: false
        },
        ticks: {
          color: colorBody
        }
      },
      y: {
        border: {
          color: colorBorderTranslucent
        },
        grid: {
          color: colorBorderTranslucent
        },
        beginAtZero: true,
      }
    };
    return scales;
  }
}
