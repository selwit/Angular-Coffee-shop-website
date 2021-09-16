import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { PayhereComponent } from "./payhere/payhere.component";

const routes: Routes=[
    {path: 'about-us', component: AboutUsComponent },
    {path: 'header', component: HeaderComponent },
    {path: 'payhere', component: PayhereComponent },
    {path: 'menu', component: MenuComponent },
    {path: 'home', component: HomeComponent },
    {path: 'footer', component: FooterComponent },
    {path: 'contact-us', component: ContactUsComponent },
    
];
@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
export const routingComponent =  [AboutUsComponent,HeaderComponent, PayhereComponent, MenuComponent, HomeComponent,  FooterComponent,ContactUsComponent ]