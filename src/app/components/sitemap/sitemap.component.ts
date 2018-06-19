import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
declare var $:any;

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styles: []
})
export class SitemapComponent implements OnInit {

    public siteFooter(){
        let mainContent = $('main');
        let mainContentHeight = mainContent.height();
        let mainContentWidth = mainContent.width();

        let siteFooter = $('footer');
        let siteFooterHeight = siteFooter.height();
        let siteFooterWidth = siteFooter.width();

        mainContent.css('margin-bottom', siteFooterHeight + 25);
    }

  constructor(public _is:InfoService) { }

  ngOnInit() {
      this.siteFooter();
      $(window).resize(function(){
          this.siteFooter();
      });
  }

}
