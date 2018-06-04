import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

    constructor( private domSanitizer:DomSanitizer ){ }

  transform(value: string, url: string): any {
      let params:string = "?color=FAAF41&portrait=0";
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value + params);
  }

}
