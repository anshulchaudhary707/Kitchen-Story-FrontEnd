import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './login.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFoodComponent } from './add-food/add-food.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewItemComponent } from './view-item/view-item.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { HomeComponent } from './home/home.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';
import { AllOrderPlacedComponent } from './all-order-placed/all-order-placed.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { DeleteFromCartComponent } from './delete-from-cart/delete-from-cart.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminLogoutComponent,
    UserLogoutComponent,
    WelcomeAdminComponent,
    WelcomeUserComponent,
    AddFoodComponent,
    ViewItemComponent,
    SearchFormComponent,
    HomeComponent,
    ViewCartComponent,
    LoginAdminComponent,
    LoginUserComponent,
    ConfirmPageComponent,
    AllOrderPlacedComponent,
    AddToCartComponent,
    DeleteFromCartComponent,
    ViewAllProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
