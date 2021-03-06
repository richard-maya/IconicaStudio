import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
declare var $:any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: []
})
export class PortfolioComponent implements OnInit {

  constructor( public _port:PortfolioService ) { }

  public siteFooter(){
      let mainContent = $('main');
      let mainContentHeight = mainContent.height();
      let mainContentWidth = mainContent.width();

      let siteFooter = $('footer');
      let siteFooterHeight = siteFooter.height();
      let siteFooterWidth = siteFooter.width();

      mainContent.css('margin-bottom', siteFooterHeight + 25);
  }

  ngOnInit() {
      this.siteFooter();
      $(window).resize(function(){
          this.siteFooter();
      })
  }

}
