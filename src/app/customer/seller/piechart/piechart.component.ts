import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";

declare var require: any;
let Boost = require("highcharts/modules/boost");
let noData = require("highcharts/modules/no-data-to-display");
let More = require("highcharts/highcharts-more");

@Component({
  selector: "app-piechart",
  templateUrl: "./piechart.component.html",
  styleUrls: ["./piechart.component.scss"],
})
export class PiechartComponent implements OnInit {
  public options: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Sales by country, 2021",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Country",
        colorByPoint: true,
        data: [
          {
            name: "Brazil",
            y: 41,
            sliced: true,
            selected: true,
          },
          {
            name: "USA",
            y: 22,
          },
          {
            name: "India",
            y: 20,
          },
          {
            name: "EU",
            y: 18,
          },
          {
            name: "United Kingdom",
            y: 4,
          },
          {
            name: "Australia",
            y: 4,
          },
          {
            name: "Vietnam",
            y: 4,
          },
          {
            name: "Japan",
            y: 3,
          },
          {
            name: "Taiwan",
            y: 3,
          },
        ],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {
    Highcharts.chart("container-pie", this.options);
  }
}
