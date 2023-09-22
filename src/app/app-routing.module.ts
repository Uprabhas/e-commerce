import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { SerComponent } from './ser/ser.component';
import { ContactComponent } from './contact/contact.component';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
  {
    path:'home',component : HomeComponent
  },
{
    path:'contact',component:ContactComponent
  },
  {
    path:'auth',
    component:AuthRoutingModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
