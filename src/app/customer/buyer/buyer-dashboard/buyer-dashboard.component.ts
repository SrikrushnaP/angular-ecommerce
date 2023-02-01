import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { MyCartService } from '../my-cart/services/my-cart.service';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.scss']
})
export class BuyerDashboardComponent implements OnInit {

  all_products
  searched_products
  current_products
  cart_products
  product_categories: string[] = []
  show_checkout: Boolean = false;
  buttonVisible: Boolean = false

  constructor(private router: Router, private customerService: CustomerService, private myCartService: MyCartService) { }

  ngOnInit() {
    this.getAllProduct()
  }

  searchText: string | undefined
  searchProducts() {
    let temp = this.current_products.filter(data => data.name.toLowerCase().includes(this.searchText.trim().toLowerCase()))
    this.searched_products = temp
  }

  filterProducts(category: string) {
    this.buttonVisible = true;
    let temp = this.all_products.filter(data => data.productDesc.includes(category))
    this.searched_products = temp
    this.current_products = temp
  }

  getAllProduct() {
    this.buttonVisible = false;
    this.customerService.allProduct().subscribe(data => {
      this.all_products = data;
      this.searched_products = data
      this.current_products = data
      data.forEach(item => {
        if (!this.product_categories.includes(item.productDesc)) {
          this.product_categories.push(item.productDesc);
        }
      })
    }, error => {
      console.log("My error", error);
    })

    this.myCartService.allProduct().subscribe(data => {
      this.cart_products = data
    }, error => {
      console.log("My error", error);
    })
  }

  buyProduct(id) {
    this.show_checkout = true;
    this.customerService.quickBuyProduct(id) //We pass to serice from service we can access in another component
    this.router.navigateByUrl("/checkout");
  }

  addToCart(product) {
    const index = this.cart_products.findIndex(cart => cart.id === product.id)
    if (index > -1) {
      this.addQuantity(this.cart_products[index])
    }
    else {
      product['qty'] = 1
      this.myCartService.addToCart(product).subscribe(data => {
        this.getAllProduct()
      }), err => {
        alert("Some error occured!")
      }
    }
  }
  
  addQuantity(product) {
    ++product.qty
    this.myCartService.updateQuantity(product.id, product).subscribe(data => {
    }, err => {
      alert("Some error occured!")
    })
  }

}
