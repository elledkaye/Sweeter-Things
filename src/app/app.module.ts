import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { MDBBootstrapModulesPro, ButtonsModule, PopoverModule, ModalModule,NavbarModule, TooltipModule, InputsModule, WavesModule, LightBoxModule, SidenavModule, AccordionModule, SmoothscrollModule, CardsModule } from 'ng-uikit-pro-standard';

import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import {DefaultPageComponent} from './default-page/default-page.component'; 
import {MainPageComponent} from './main-page/main-page.component';
import { ContactComponent } from './contact/contact.component'
import { BlogComponent } from './blog/blog.component';
import { OrderComponent } from './order/order.component';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultPageComponent,
    MainPageComponent,
    ContactComponent,
    BlogComponent,
    OrderComponent,
    ProductPageComponent
   
  ],
  imports: [
    AccordionModule,
    AppRoutingModule,
    BrowserModule,
    ButtonsModule,
    CardsModule,
    InputsModule,
    LightBoxModule,
    MDBBootstrapModulesPro.forRoot(),
    ModalModule,
    NavbarModule,
    PopoverModule,
    SidenavModule,
    SmoothscrollModule,
    TooltipModule,
    WavesModule
  
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
