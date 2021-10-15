import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CustomerService } from "../../services/customer.service";

@Component({
  selector: "app-seller-dashboard",
  templateUrl: "./seller-dashboard.component.html",
  styleUrls: ["./seller-dashboard.component.scss"],
})
export class SellerDashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
  }
  
}
