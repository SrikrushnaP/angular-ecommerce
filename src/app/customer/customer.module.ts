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

@NgModule({
  declarations: [BuyerDashboardComponent, SellerDashboardComponent, SigninSignupComponent, CheckoutComponent, CommentComponent, CarrouselComponent, LinechartComponent, PiechartComponent, SearchbarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CustomerModule { }
