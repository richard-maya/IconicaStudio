import { Component } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Subscription }   from 'rxjs/Subscription';
import {PageScrollConfig} from 'ng2-page-scroll';
import { InfoService } from './services/info.service';
// import {NgsRevealConfig} from 'ng-scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private wowSubscription: Subscription;

    constructor(private wowService: NgwWowService, public _is:InfoService){
      this.wowService.init({
          offset:       50,
          mobile:       true
      });

      PageScrollConfig.defaultScrollOffset = 50;
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
}
