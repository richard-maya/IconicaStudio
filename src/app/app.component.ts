import { Component, OnInit, OnChanges } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Subscription }   from 'rxjs/Subscription';
import { PageScrollConfig } from 'ng2-page-scroll';
import { InfoService } from './services/info.service';
import { PortfolioService } from './services/portfolio.service';
import { NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/distinctUntilChanged';
// import {NgsRevealConfig} from 'ng-scrollreveal';
declare var $:any;
declare var gtag:any;
declare var fbq:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private wowSubscription: Subscription;
    // public direccion:any = document.location.pathname;

    constructor(private wowService: NgwWowService, public _is:InfoService, public _port:PortfolioService, public router:Router){
      // WOWJS
      this.wowService.init({
          offset:       -10,
          mobile:       true
      });

      // PageScroll
      PageScrollConfig.defaultScrollOffset = 0;
      PageScrollConfig.defaultEasingLogic = {
          ease: (t: number, b: number, c: number, d: number): number => {
              // easeInOutExpo easing
              if (t === 0) return b;
              if (t === d) return b + c;
              if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
              return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
          }
      };

      // Google ANALYTICS
      router.events.distinctUntilChanged((previous: any, current: any) => {
            if(current instanceof NavigationEnd) {
                return previous.url === current.url;
            }
            return true;
        }).subscribe((x: any) => {
            // console.log('router.change', x);
            gtag('js', new Date());
            // gtag('config', 'UA-121193876-1');
            gtag('config', 'UA-121193876-1', {
              // 'page_title' : 'homepage',
              'page_path': x.url
            });
            fbq('track', 'PageView');
        });
    }

    ngOnInit(){
        $(document).on("scroll", function () {
        	if ($(document).scrollTop() > 50) {
        		$(".navbar").addClass("navbar-small");
        	} else {
        		$(".navbar").removeClass("navbar-small");
        	}
        });
    }

    ngOnChanges(){

    }
}
