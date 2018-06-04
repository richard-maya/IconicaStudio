import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Portfolio } from '../interfaces/portfolio.interface';

@Injectable()
export class PortfolioService {

    portfolioList:Portfolio[] = [];

  constructor( public http:Http ) {
      this.getPortfolio();
  }

  public getPortfolio(){
      this.http.get("assets/data/portfolio-list.json").subscribe(data=>{
          this.portfolioList = data.json();
      });
  }

  public getProject( index:string ){
      return this.portfolioList[index];
  }

}
