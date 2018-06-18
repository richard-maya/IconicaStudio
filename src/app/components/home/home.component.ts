import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {

    public siteFooter(){
        let mainContent = $('main');
        let mainContentHeight = mainContent.height();
        let mainContentWidth = mainContent.width();

        let siteFooter = $('footer');
        let siteFooterHeight = siteFooter.height();
        let siteFooterWidth = siteFooter.width();

        mainContent.css('margin-bottom', siteFooterHeight + 25);
    }

  constructor(public _is:InfoService) {
  }

  ngOnInit() {
      this.siteFooter();
      $(window).resize(function(){
          this.siteFooter();
      })

      $("#contact").waypoint(function(direction){
  	    if(direction == 'down'){
  	        $(".navbar").addClass('yellow-navbar');
            $("#navbar-logo").attr("src","assets/img/ui/menu-logo-white.png");
  	    } else {
  	        $(".navbar").removeClass('yellow-navbar');
            $("#navbar-logo").attr("src","assets/img/ui/menu-logo.png");
  	    }
    }, {offset: '0px'});
  }

}
