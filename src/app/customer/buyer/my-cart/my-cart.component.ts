import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyCartService } from './services/my-cart.service';
declare var jQuery: any;

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  all_products
  single_product_data
  edit_product_id

  constructor(private router: Router, private myCartService: MyCartService) { }

  ngOnInit() {
    this.getAllProduct()
  }

  getAllProduct() {
    this.myCartService.allProduct().subscribe(data => {
      this.all_products = data;
    }, error => {
      console.log("My error", error);
    })
  }

  increaseQuantity(product) {
    ++product.qty
    this.myCartService.updateQuantity(product.id, product).subscribe(data => {

    }, err => {
      alert("Some error occured!")
    })
  }

  decreaseQuantity(product) {
    if (product.qty <= 1) {
      jQuery('#removeProductModal').modal('toggle')
    }
    else {
      --product.qty
      this.myCartService.updateQuantity(product.id, product).subscribe(data => {
        
      }, err => {
        alert("Some error occured!")
      })
    }
  }
  
  removeProduct(product) {
    this.myCartService.deleteProduct(product.id).subscribe(data => {
      this.getAllProduct()
    }, err => {
      alert("Some error occured!")
    })
    jQuery('#removeProductModal').modal('toggle')
  }
}
