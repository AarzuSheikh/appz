import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { FormblComponent } from './formbl/formbl.component';
import { PageComponent } from './page/page.component';
import { PizaaComponent } from './pizaa/pizaa.component';
import { BiryaniComponent } from './biryani/biryani.component';
import { ColdcoffeeComponent } from './coldcoffee/coldcoffee.component';
import { PageeComponent } from './pagee/pagee.component';
import { DashComponent } from './dash/dash.component';

const routes: Routes = [
  {path:'mainpage',component:MainpageComponent},
  {path:'profile',component:ProfileComponent},
  {path:'login',component:LoginComponent,data:
{title:'login page'}},
  {path:'',component:FormblComponent},
  {path:'page',component:PageComponent},
  {path:'pizza',component:PizaaComponent},
  {path:'biryani',component:BiryaniComponent},
  {path:'coldcoffee',component:ColdcoffeeComponent},
  {path:'pagee',component:PageeComponent},
  {path:'dash',component:DashComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
