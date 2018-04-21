import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Plug Ins
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
// import {NgsRevealModule} from 'ng-scrollreveal';
import { NgwWowModule } from 'ngx-wow';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';

// Routes
import { app_routing } from './app.routes';

// Services

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule,
    Ng2PageScrollModule,
    // NgsRevealModule.forRoot(),
    NgwWowModule.forRoot(),
    ParallaxScrollModule,
    app_routing
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
