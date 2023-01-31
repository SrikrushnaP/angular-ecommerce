import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyCartService {

  public product_url = environment.server_url + '/cart/';
  private cartProductsTotal = new BehaviorSubject(0);
  private cartProducts = new BehaviorSubject([]);
  currentCartTotal = this.cartProductsTotal.asObservable();
  currentProducts = this.cartProducts.asObservable();

  constructor(private apiService: ApiService) { }

  allProduct(): Observable<any> {
    return this.apiService.get(this.product_url)
  }

  singleProduct(id) {
    return this.apiService.get(this.product_url + id)
  }

  updateQuantity(id, product): Observable<any> {
    return this.apiService.put(this.product_url + id, product)
  }

  cartTotal(total: number, products: any) {
    this.cartProductsTotal.next(total)
    this.cartProducts.next(products)
  }

  addToCart(product): Observable<any> {
    return this.apiService.post(this.product_url, product);
  }

  deleteProduct(id): Observable<any> {
    return this.apiService.delete(this.product_url + id);
  }
}
