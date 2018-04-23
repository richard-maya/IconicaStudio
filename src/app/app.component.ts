import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Subscription }   from 'rxjs/Subscription';
import { PageScrollConfig } from 'ng2-page-scroll';
import { InfoService } from './services/info.service';
// import {NgsRevealConfig} from 'ng-scrollreveal';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private wowSubscription: Subscription;

    constructor(private wowService: NgwWowService, public _is:InfoService){
      this.wowService.init({
          offset:       75,
          mobile:       true
      });

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
}
