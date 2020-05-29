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
  local1: any;
  local2: any;
  local3: any;
  local4: any;
  local5: any;

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
      tittle: "Esta aqui vós merce",
      icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
      animation: google.maps.Animation.DROP
    });

    const local1 = new google.maps.local1({
        position: new google.maps.LatLng(-22.495713, -48.551065),
        map: this.map,
        title: "Aqui tem Lanche foda",
        //colocar ícones
        icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        animation: google.maps.Animation.BOUNCE
    });
    const local2 = new google.maps.local2({
        position: new google.maps.LatLng(-22.499467, -48.555141),
        map: this.map,
        title: "Cabeleireiro foda",
        //colocar ícones
        icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        animation: google.maps.Animation.BOUNCE
    });
    const local3 = new google.maps.local3({
        position: new google.maps.LatLng(-22.499327, -48.563401),
        map: this.map,
        title: "Não pode vim aqui",
        //colocar ícones
        icon: 'https://maps.google.com/mapfiles/ms/icons/r-dot.png',
        animation: google.maps.Animation.BOUNCE
    });

    const local4 = new google.maps.local4({
        position: new google.maps.LatLng(-22.495730, -48.566072),
        map: this.map,
        title: "Se estiver aqui não é um bm sinal",
        //colocar ícones
        icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        animation: google.maps.Animation.BOUNCE
    });
    const local5 = new google.maps.local5({
        position: new google.maps.LatLng(-22.494514, -48.558450),
        map: this.map,
        title: "Boom de mais o lanche daqui, só cuidado ao pedir ao ponto, as vezes vem mal passado",
        //colocar ícones
        icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        animation: google.maps.Animation.BOUNCE
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
