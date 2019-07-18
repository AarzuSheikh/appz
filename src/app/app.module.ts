import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { from } from 'rxjs';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormblComponent } from './formbl/formbl.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PageComponent } from './page/page.component';
import { CookieService } from 'ngx-cookie-service';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PizaaComponent } from './pizaa/pizaa.component';
import { GridfilterPipe } from './gridfilter.pipe';
import {FilterPipeModule } from 'ngx-filter-pipe';
import { BiryaniComponent } from './biryani/biryani.component';
import { ColdcoffeeComponent } from './coldcoffee/coldcoffee.component';
import { PageeComponent } from './pagee/pagee.component';
import { DashComponent } from './dash/dash.component';



@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveformComponent,
    FormblComponent,
    MainpageComponent,
    LoginComponent,
    ProfileComponent,
    PageComponent,
    PizaaComponent,
    GridfilterPipe,
    BiryaniComponent,
    ColdcoffeeComponent,
    PageeComponent,
    DashComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LazyLoadImageModule,
    FilterPipeModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
