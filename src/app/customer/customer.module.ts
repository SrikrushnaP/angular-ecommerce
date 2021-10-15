import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerDashboardComponent } from './buyer/buyer-dashboard/buyer-dashboard.component';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { SigninSignupComponent } from './signin-signup/signin-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './buyer/checkout/checkout.component';
import { CommentComponent } from './buyer/comment/comment.component';
import {MatIconModule} from "@angular/material/icon";
import { CarrouselComponent } from './buyer/carrousel/carrousel.component';
import { LinechartComponent } from './seller/linechart/linechart.component';
import { PiechartComponent } from './seller/piechart/piechart.component';
import { SearchbarComponent } from './buyer/searchbar/searchbar.component';
import { BarchartComponent } from './seller/barchart/barchart.component';
import { OrdersComponent } from './buyer/orders/orders.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { CartComponent } from './buyer/cart/cart.component';
import { ProductCardComponent } from './buyer/product-card/product-card.component';

@NgModule({
  declarations: [BuyerDashboardComponent, SellerDashboardComponent, SigninSignupComponent, CheckoutComponent, CommentComponent, CarrouselComponent, LinechartComponent, PiechartComponent, SearchbarComponent, BarchartComponent, OrdersComponent, CartComponent, ProductCardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatExpansionModule,
    MatButtonModule,
    TranslateModule
  ]
})
export class CustomerModule { }
