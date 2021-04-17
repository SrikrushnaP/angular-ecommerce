import { Component, OnInit } from "@angular/core";

import * as Highcharts from "highcharts";

@Component({
  selector: "app-barchart",
  templateUrl: "./barchart.component.html",
  styleUrls: ["./barchart.component.scss"],
})
export class BarchartComponent implements OnInit {
  public options: any = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Most selled products by category",
    },
    xAxis: {
      categories: [
        "Health",
        "Eletronics and IoT",
        "Food",
        "Farming",
        "Heavy equipments",
      ],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Total product selled",
      },
    },
    legend: {
      reversed: true,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      series: {
        stacking: "normal",
      },
    },
    series: [
      {
        name: "Less than 500 USD",
        data: [5, 3, 4, 7, 2],
      },
      {
        name: "Between 500 and 1500 USD",
        data: [2, 2, 3, 2, 1],
      },
      {
        name: "More than 1500 USD",
        data: [3, 4, 4, 2, 5],
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {
    Highcharts.chart("container-bar", this.options);
  }
}
