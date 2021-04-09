import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

  public options: any = {
    title: {
      text: 'Sales- Year performance',
    },

    yAxis: {
      title: {
        text: 'Sales in dollar',
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: 'Range in 7 days',
      },
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2021,
      },
    },

    series: [
      {
        name: 'Sales',
        data: [1500, 1470, 1552, 1631, 1607, 1794],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };

  constructor() {}

  ngOnInit(): void {
    Highcharts.chart('container-line', this.options);
  }

}
