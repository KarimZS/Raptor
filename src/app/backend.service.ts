import { Injectable } from '@angular/core';
import { temp_service_result } from '../temp_service_result';

@Injectable({
  providedIn: 'root'
})


export class BackendService {


  constructor() { }



  //usually we would set this from server or get it from server in the get function
  homePage = temp_service_result.homePage;

  getHomePage() {
    return this.homePage;
  }
}
