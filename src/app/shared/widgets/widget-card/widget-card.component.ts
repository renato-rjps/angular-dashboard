import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html',
  styleUrls: ['./widget-card.component.scss']
})
export class WidgetCardComponent implements OnInit {

  chart: Chart;

  ngOnInit() {
    this.init();
  }

  init() {
    let chart = new Chart({
      chart: {
        type: 'area',
        borderColor: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        height: 60
      },
      credits: {
        enabled: false
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      legend: {
        enabled: false
      },
      tooltip: {
        split: true,
        outside: true
      },
      yAxis: {
        title: null,
        startOnTick: false,
        endOnTick: false,
        labels: {
          enabled: false
        }
      },
      xAxis: {
        title: null,
        startOnTick: false,
        endOnTick: false,
        labels: {
          enabled: false
        }
      },
      series: [{
        data: [71, 48, 38, 66],
        type: 'area'
      }]
    });
    //chart.addPoint(4);
    this.chart = chart;
  }

}
