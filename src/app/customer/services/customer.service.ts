import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private single_product_id = new BehaviorSubject(null);
  currentProduct = this.single_product_id.asObservable();

  public product_url = environment.server_url + '/products/';
  public user_url = environment.server_url + '/user/';
  public order_url = environment.server_url + '/orders/';

  constructor(private apiService: ApiService) { }

  allProduct(): Observable<any> {
    return this.apiService.get(this.product_url)
  }

  quickBuyProduct(product_id: number) {
    this.single_product_id.next(product_id)
  }

  individualProduct(id) {
    return this.apiService.get(this.product_url + id)
  }
  userDetail(id) {
    return this.apiService.get(this.user_url + id)
  }
  insertNewOrder(order_dto): Observable<any> {
    return this.apiService.post(this.order_url, order_dto);
  }

  orderDashboardData(): Observable<any> {
    return this.apiService.get(this.order_url)
  }
  productDashboardData(): Observable<any> {
    return this.apiService.get(this.product_url)
  }
}
