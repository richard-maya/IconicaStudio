import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

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
      });

      $("#meaning").waypoint(function(direction){
  	    if(direction == 'down'){
  	        $(".navbar").addClass('white-navbar');
  	    } else {
  	        $(".navbar").removeClass('white-navbar');
  	    }
      }, {offset: '0px'});
  }

}
