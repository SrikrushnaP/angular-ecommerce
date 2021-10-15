import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CustomerService } from "../../services/customer.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  all_products;
  show_checkout: Boolean = false;

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this.customerService.allProduct().subscribe(
      (data) => {
        this.all_products = data;
        // console.log("ALl Product", this.all_products);
      },
      (error) => {
        console.log("My error", error);
      }
    );
  }

}
