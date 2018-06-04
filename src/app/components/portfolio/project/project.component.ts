import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from '../../../services/portfolio.service';
declare var $:any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: []
})
export class ProjectComponent implements OnInit {

    proyecto:any = {};

    public siteFooter(){
        let mainContent = $('main');
        let mainContentHeight = mainContent.height();
        let mainContentWidth = mainContent.width();

        let siteFooter = $('footer');
        let siteFooterHeight = siteFooter.height();
        let siteFooterWidth = siteFooter.width();

        mainContent.css('margin-bottom', siteFooterHeight + 25);
    }

    public fireSwipebox(){
        $( '.swipebox' ).swipebox();
    }

  constructor( private actRoute:ActivatedRoute,
                private _projects:PortfolioService
  ) {
      this.siteFooter();
      this.actRoute.params.subscribe( params =>{
          // console.log(params['id']);
          this.proyecto = this._projects.getProject(params['id']);
      });
  }

  ngOnInit() {
      this.siteFooter();
      $(window).resize(function(){
          this.siteFooter();
      })
  }

}
