import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfoService {

    info:any = {};

  constructor( public http:Http ) {
      this.http.get("assets/data/info.json").subscribe(data=>{
          this.info = data.json();
      });
  }

}
