import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: any;
  posicaoAtual: any;
  @ViewChild('map', {read: ElementRef, static: false}) mapRaf: ElementRef; 

  constructor(private geolocation: Geolocation)  {}

  public async showMap(){
    //const location = new google.maps.LatLng(-22.489130, -48.546436);
    await this.buscaPosicao();
    const options={
      center: this.posicaoAtual,
      zoom: 15,
      disableDeFaultUI: true
    }
    this.map == new google.maps.Map(this.mapRaf.nativeElement, options)
    const marcador = new google.maps.Manker({
      position: this.posicaoAtual,
      map: this.map,
      tittle: "",
      icon: 'htpps://maps.google.com/mapfiles/ms/icons/green-dot.png',
      animation: google.maps.Animation.
    });
  }
  ionViewDidEnter(){
    this.showMap();
  }    

  public async buscaPosicao(){
    await this.geolocation.getCurrentPosition().then((resp) => {
      this.posicaoAtual ={
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      }
 // resp.coords.latitude
 // resp.coords.longitude
  }).catch((error) => {
    console.log('Error getting location', error);
  });
  }

}
