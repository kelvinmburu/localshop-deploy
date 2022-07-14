import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StoresComponent } from './components/stores/stores.component'; 
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { DefectiveGoodsComponent } from './components/defective-goods/defective-goods.component';
import { ReportComponent } from './components/report/report.component'; 
import { ClerkComponent } from './components/clerk/clerk.component'; 
import { RequestComponent } from './components/request/request.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { UpdateProductComponent } from './components/products/update-product/update-product.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  
  {path: '', component: LandingpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newadmin', component: AddUserComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'stores', component: StoresComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'defective', component: DefectiveGoodsComponent},
  {path: 'reports', component: ReportComponent},
  {path: 'clerk', component: ClerkComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'update-product', component: UpdateProductComponent},
  {path: 'request', component: RequestComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
