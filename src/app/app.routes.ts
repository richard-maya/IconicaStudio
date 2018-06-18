import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { BrandingComponent } from './components/services/branding/branding.component';
import { StartupsComponent } from './components/services/startups/startups.component';
import { VideoComponent } from './components/services/video/video.component';
import { ProjectComponent } from './components/portfolio/project/project.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trabajos', component: PortfolioComponent },
  { path: 'acerca', component: AboutComponent },
  { path: 'contacto', component: HomeComponent },
  { path: 'privacidad', component: PrivacyComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: 'servicios/branding', component: BrandingComponent },
  { path: 'servicios/startups', component: StartupsComponent },
  { path: 'servicios/audiovisual', component: VideoComponent },
  { path: 'trabajos/:id', component: ProjectComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);
