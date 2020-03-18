import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './widget-pie.component.html',
  styleUrls: ['./widget-pie.component.scss']
})
export class WidgetPieComponent implements OnInit {

  chart: Chart;

  ngOnInit() {
    this.init();
  }

  init() {
    let chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        data: [1, 2, 3],
        type: 'line'
      }]
    });
    chart.addPoint(4);
    this.chart = chart;
  }

}
