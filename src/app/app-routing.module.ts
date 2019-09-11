import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultPageComponent} from './default-page/default-page.component'; 
import {MainPageComponent} from './main-page/main-page.component';
import {BlogComponent} from './blog/blog.component'; 
import {OrderComponent} from './order/order.component'; 
import {ProductPageComponent} from './product-page/product-page.component'; 
import {ContactComponent} from './contact/contact.component';




const routes: Routes = [ 
  {path: 'default', component: DefaultPageComponent},
  {path:'main-page', component: MainPageComponent},
  {path:'blog', component: BlogComponent},
  {path:'order', component: OrderComponent},
  {path:'product-page', component: ProductPageComponent},
  {path:'contact', component: ContactComponent}
]; 



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
