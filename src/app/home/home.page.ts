import { Component, ViewChild, ElementRef } from '@angular/core';

declare var google: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: any;
  @ViewChild('map', {read: ElementRef, static: false}) mapRaf: ElementRef; 

  constructor() {}

  public showMap(){
    const location = new google.maps.LatLng(-22.489130, -48.546436);
    const options={
      center: location,
      zoom: 15,
      disableDeFaultUI: true
    }
    this.map == new google.maps.Map(this.mapRaf.nativeElement, options)
  }
  ionViewDidEnter(){
    this.showMap();
  }    
}
