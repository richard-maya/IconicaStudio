import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
declare var $:any;

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styles: []
})
export class PrivacyComponent implements OnInit {

    fecha:any = new Date();
    nombreMes:string[] = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    mes:string = this.nombreMes[this.fecha.getUTCMonth()];
    anio:number = new Date().getFullYear();

    public siteFooter(){
        let mainContent = $('main');
        let mainContentHeight = mainContent.height();
        let mainContentWidth = mainContent.width();

        let siteFooter = $('footer');
        let siteFooterHeight = siteFooter.height();
        let siteFooterWidth = siteFooter.width();

        mainContent.css('margin-bottom', siteFooterHeight + 25);
    }

  constructor(public _is:InfoService) { }

  ngOnInit() {
      this.siteFooter();
      $(window).resize(function(){
          this.siteFooter();
      });
  }

}
