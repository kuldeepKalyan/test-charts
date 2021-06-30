import {Component} from '@angular/core';
import {ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexStroke, ApexXAxis, ApexYAxis} from 'ng-apexcharts';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    currentYearIndex = 4;
    currentYear = '2021';

    actualData = [
        [30, 90, 90, 30, 90, 30, 90, 90, 30, 90, 30, 90],
        [1, 45, 26, 22, 78, 100, 23, 59, 12, 23, 55, 12],
        [0, 30, 60, 90, 60, 30, 0, 30, 60, 90, 60, 30],
        [10, 20, 30, 20, 10, 0, 20, 30, 40, 50, 80, 90],
        [10, 20, 30, 40, 50, 60, 70, 80, 90, 10, 20, 30]
    ];
    chartSeries: ApexAxisChartSeries = [{
        name: 'Sales',
        data: this.actualData[this.currentYearIndex]
    }];
    dataLabels: ApexDataLabels = {
        enabled: false
    };
    labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    chartOptions: ApexChart = {
        type: 'area',
        toolbar: {
            show: false
        }
    };
    xAxis: ApexXAxis = {
        labels: {
            show: true
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    };
    yAxis: ApexYAxis = {
        labels: {
            show: false
        },
        axisBorder: {
            show: false
        }
    };
    grid = {
        show: false
    };
    strokeConfig: ApexStroke = {
        lineCap: 'butt',
        width: 2
    };
    chartTitle = {
        text: 'Number of Accounts'
    };

    constructor() {
    }

    ngOnInit(): void {
    }

    setYear(): void {
        this.currentYear = ['2017', '2018', '2019', '2020', '2021'][this.currentYearIndex];
        this.setData();
    }

    setData() {
        this.chartSeries = [{
            name: 'Sales',
            data: this.actualData[this.currentYearIndex]
        }];
    }

    nextYear() {
        if (this.currentYearIndex < 4) {
            this.currentYearIndex = this.currentYearIndex + 1;
        }
        this.setYear();
    }

    prevYear() {
        if (this.currentYearIndex > 0) {
            this.currentYearIndex = this.currentYearIndex - 1;
        }
        this.setYear();
    }

    selectYear() {
        switch (this.currentYear) {
            case '2021':
                this.currentYearIndex = 4;
                break;
            case '2020':
                this.currentYearIndex = 3;
                break;
            case '2019':
                this.currentYearIndex = 2;
                break;
            case '2018':
                this.currentYearIndex = 1;
                break;
            case '2017':
                this.currentYearIndex = 0;
                break;
        }
        this.setData();
    }

}
