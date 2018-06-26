import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var gtag:any;
declare var fbq:any;

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styles: []
})
export class LogoComponent implements OnInit {

    public enviarCorreo(){
        gtag('js', new Date());
        gtag('config', 'UA-121193876-1');
        gtag('event', 'conversion', {'send_to': 'AW-806749338/3lV8CI3w24QBEJqJ2IAD'});
        fbq('init', '256718081523336', {
          'em': 'email',
          'ge': 'gender',
          'db': 'birth',
          'ct': 'city',
        });
        fbq('track', 'Lead', {content_name: 'Landing Page', content_category: 'Correo Enviado'});
    }

  constructor() { }

  ngOnInit() {

  }

}
