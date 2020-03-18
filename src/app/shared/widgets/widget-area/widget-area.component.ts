import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-widget-area',
  templateUrl: './widget-area.component.html',
  styleUrls: ['./widget-area.component.scss']
})
export class WidgetAreaComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'area',
      width: 800
    },
    title: {
      text: 'Area chart with negative values'
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2],
      type: 'area'
    }, {
      name: 'Jane',
      data: [2, -2, -3, 2, 1],
      type: 'area'
    }, {
      name: 'Joe',
      data: [3, 4, 4, -2, 5],
      type: 'area'
    }]
  };
}
