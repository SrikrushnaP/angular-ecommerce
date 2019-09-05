import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundErrorComponent } from './shared/layouts/page-not-found-error/page-not-found-error.component';
import { AdminAuthGuardLogin, AdminAuthGaurdService, SellerBuyerAuthGuardLogin, SellerAuthGaurdService, BuyerAuthGaurdService } from './shared/services/auth-gaurd.service';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { SellerDashboardComponent } from './customer/seller/seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './customer/buyer/buyer-dashboard/buyer-dashboard.component';
import { SigninSignupComponent } from './customer/signin-signup/signin-signup.component';
import { UserCrudComponent } from './admin/user-crud/user-crud.component';
import { ProductCrudComponent } from './product/product-crud/product-crud.component';
import { CheckoutComponent } from './customer/buyer/checkout/checkout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "", component: HomeComponent },
  { path: "my-profile", component: UserProfileComponent },
  { path: "contact-us", component:ContactUsComponent},
  //Path/component you want to access before admin login/signin
  {
    path: '', canActivate: [AdminAuthGuardLogin], children: [
      { path: "admin-login", component: AdminLoginComponent },
    ]
  },
  //Path/component you want to access after admin login/signin
  {
    path: '', canActivate: [AdminAuthGaurdService], children: [
      { path: "admin-dashboard", component: AdminDashboardComponent },
      { path: "admin/user", component: UserCrudComponent },
      { path: "admin/product", component: ProductCrudComponent }
    ]
  },

  //Path/component you want to access before customer(seller and buyer) login/signin
  {
    path: '', canActivate: [SellerBuyerAuthGuardLogin], children: [
      { path: "sign-in", component: SigninSignupComponent },
      { path: "sign-up", component: SigninSignupComponent },
    ]
  },

  //Path/component you want to access after customer(seller) login/signin
  {
    path: '', canActivate: [SellerAuthGaurdService], children: [
      { path: "seller-dashboard", component: SellerDashboardComponent },
      { path: "seller/product", component: ProductCrudComponent },
    ]
  },

  //Path/component you want to access after customer(buyer) login/signin
  {
    path: '', canActivate: [BuyerAuthGaurdService], children: [
      { path: "buyer-dashboard", component: BuyerDashboardComponent },
      { path: "checkout", component: CheckoutComponent }
    ]
  },
  { path: "**", component: PageNotFoundErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
