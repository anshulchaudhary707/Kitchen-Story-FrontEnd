import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "userLogIn", component: UserLoginComponent
  },
  {
    path: "welcomeUser", component: WelcomeUserComponent
  },
  {
    path: "userLogOut", component: UserLogoutComponent
  },
  {
    path: "adminLogIn", component: AdminLoginComponent
  },
  {
    path: "welcomeAdmin", component: WelcomeAdminComponent
  },
  {
    path: "adminLogOut", component: AdminLogoutComponent
  },
  {
    path: "viewItem", component: ViewItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
