import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { AllOrderPlacedComponent } from './all-order-placed/all-order-placed.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';
import { DeleteFromCartComponent } from './delete-from-cart/delete-from-cart.component';
import { HomeComponent } from './home/home.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  }, {
    path: "adminLogIn", component: LoginAdminComponent
  },
  {
    path: "userLogIn", component: LoginUserComponent
  },
  {
    path: "welcomeUser", component: WelcomeUserComponent
  },
  {
    path: "userLogOut", component: UserLogoutComponent
  },
  {
    path: "welcomeAdmin", component: WelcomeAdminComponent
  },
  {
    path: "adminLogOut", component: AdminLogoutComponent
  },
  {
    path: "viewItem", component: ViewItemComponent
  },
  {
    path: "viewCart", component: ViewCartComponent
  },
  {
    path: "confirmPage", component: ConfirmPageComponent
  },
  {
    path: "allOrderPlaced", component: AllOrderPlacedComponent
  },
  {
    path: "add2Cart", component: AddToCartComponent
  },
  {
    path: "deleteFromCart", component: DeleteFromCartComponent
  },
  {
    path: "viewAllProducts", component: ViewAllProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
