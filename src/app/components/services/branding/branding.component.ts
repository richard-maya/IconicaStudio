import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info.service';
declare var $:any;

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styles: []
})
export class BrandingComponent implements OnInit {

  constructor(public _is:InfoService) { }

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
