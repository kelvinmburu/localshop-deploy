import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ReportComponent } from './components/report/report.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { DefectiveGoodsComponent } from './components/defective-goods/defective-goods.component';
import { ProductsComponent } from './components/products/products.component';
import { StoresComponent } from './components/stores/stores.component'; 
import { RequestComponent } from './components/request/request.component';
import { ClerkComponent } from './components/clerk/clerk.component'; 
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component'; 

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import {SharedService} from './services/shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateProductComponent } from './components/products/update-product/update-product.component';
import { UpdateDefectiveComponent } from './components/defective-goods/update-defective/update-defective.component';
import { UpdateClerkComponent } from './components/clerk/update-clerk/update-clerk.component';
import { UpdateUserComponent } from './components/add-user/update-user/update-user.component';
import { ProfileComponent } from './components/profile/profile.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    LandingpageComponent,
    ReportComponent,
    AddUserComponent,
    DashboardComponent,
    OrdersComponent,
    DefectiveGoodsComponent,
    ProductsComponent,
    RequestComponent,
    ClerkComponent,
    StoresComponent,
    AboutComponent,
    ContactComponent,
    UpdateProductComponent,

    UpdateDefectiveComponent,
    UpdateClerkComponent,
    UpdateUserComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
