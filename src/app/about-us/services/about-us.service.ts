import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  public product_url = environment.server_url + '/members/';

  constructor(private apiService: ApiService) { }

  allMembers(): Observable<any> {
    return this.apiService.get(this.product_url)
  }
}
