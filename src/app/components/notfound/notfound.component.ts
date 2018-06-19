import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styles: []
})
export class NotfoundComponent implements OnInit {

    public siteFooter(){
        let mainContent = $('main');
        let mainContentHeight = mainContent.height();
        let mainContentWidth = mainContent.width();

        let siteFooter = $('footer');
        let siteFooterHeight = siteFooter.height();
        let siteFooterWidth = siteFooter.width();

        mainContent.css('margin-bottom', siteFooterHeight + 25);
    }

  constructor() { }

  ngOnInit() {
      this.siteFooter();
      $(window).resize(function(){
          this.siteFooter();
      });
  }

}
