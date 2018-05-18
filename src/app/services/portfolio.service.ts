import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PortfolioService {
    
    portfolioList:any[] = [];

  constructor( public http:Http ) {
      this.getPortfolio();
  }

  public getPortfolio(){
      this.http.get("assets/data/portfolio-list.json").subscribe(data=>{
          this.portfolioList = data.json();
      });
  }

}
