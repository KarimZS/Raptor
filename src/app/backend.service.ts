import { Injectable } from '@angular/core';
import { temp_service_result } from '../temp_service_result';

@Injectable({
  providedIn: 'root'
})


export class BackendService {

  constructor() { }

  //usually we would set this from server or get it from server in the get function
  private homePage = temp_service_result.homePage;
  getHomePage() 
  {
    return this.homePage;
  }

  private featuresPage = temp_service_result.featuresPage;
  getFeaturesPage()
  {
    return this.featuresPage;
  }

  private servicesPage = temp_service_result.servicesPage;
  getServicesPage()
  {
    return this.servicesPage;
  }

  private howitworksPage = temp_service_result.howitworksPage;
  getHowitworksPage()
  {
    return this.howitworksPage;
  }

  private portfolioPage = temp_service_result.portfolioPage;
  getPortfolioPage()
  {
    return this.portfolioPage;
  }

  private pricingPage = temp_service_result.pricingPage;
  getPricingPage()
  {
    return this.pricingPage;
  }

  private teamPage = temp_service_result.teamPage;
  getTeamPage()
  {
    return this.teamPage;
  }

  private testimonialPage = temp_service_result.testimonialPage;
  getTestimonialPage()
  {
    return this.testimonialPage;
  }
  
  private subscribePage = temp_service_result.subscribePage;
  getSubscribePage()
  {
    return this.subscribePage;
  }

  private blogPage = temp_service_result.blogPage;
  getBlogPage()
  {
    return this.blogPage;
  }

  private contactPage = temp_service_result.contactPage;
  getContactPage()
  {
    return this.contactPage;
  }
}
