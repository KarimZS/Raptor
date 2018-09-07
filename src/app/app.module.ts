import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './/app-routing.module';
import { BackendService } from './backend.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // FeaturesComponent,
    // ServicesComponent,
    HowItWorksComponent,
    // PortfolioComponent,
    PricingComponent,
    // TeamComponent,
    // TestimonialsComponent,
    // BlogComponent,
    // ContactComponent,
    // SubscribeComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
