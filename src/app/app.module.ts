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

// Pipes

// Services
import { InfoService } from './services/info.service';
import { PortfolioService } from './services/portfolio.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { BrandingComponent } from './components/services/branding/branding.component';
import { StartupsComponent } from './components/services/startups/startups.component';
import { VideoComponent } from './components/services/video/video.component';
import { ArrowComponent } from './components/shared/arrow/arrow.component';
import { ContactButtonComponent } from './components/shared/contact-button/contact-button.component';
import { ProjectComponent } from './components/portfolio/project/project.component';
import { CowboysComponent } from './components/portfolio/cowboys/cowboys.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { NotfoundComponent } from './components/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    PrivacyComponent,
    SitemapComponent,
    BrandingComponent,
    StartupsComponent,
    VideoComponent,
    ArrowComponent,
    ContactButtonComponent,
    ProjectComponent,
    CowboysComponent,
    DomseguroPipe,
    NotfoundComponent
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
      InfoService,
      PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
