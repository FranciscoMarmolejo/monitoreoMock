import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as Tone from 'tone';

//https://tonejs.github.io/

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent{

  constructor( private toastr: ToastrService) { }

  show = false;
  more = false;
  pop  = false;
  vehicle = {id: 'N/A', tipo: 'N/A', hora: 'N/A', driver: 'N/A', ciudad: 'N/A'};

  vehicles: any[] = [ 
    { id: '1-701', alertA: 0, alertB: 0, alertC: 0},
    { id: '2-501', alertA: 0, alertB: 0, alertC: 0},
    { id: '3-231', alertA: 0, alertB: 0, alertC: 0},
    { id: '4-671', alertA: 0, alertB: 0, alertC: 0},
    { id: '5-781', alertA: 0, alertB: 0, alertC: 0},
    { id: '6-351', alertA: 0, alertB: 0, alertC: 0},
    { id: '3-861', alertA: 0, alertB: 0, alertC: 0},
    { id: '4-431', alertA: 0, alertB: 0, alertC: 0},
    { id: '5-001', alertA: 0, alertB: 0, alertC: 0},
    { id: '6-701', alertA: 0, alertB: 0, alertC: 0},
  ];  

  alertas: any[] = [ 'Botón de Pánico', 'Jammer', 'Paro de motor'];

  drop(){

    this.show = !this.show;
  }

  showMore(){

    this.more = !this.more;
  }

  showToastr(){

    // (tipoAlerta === 1) ? this.toastr.error('Tenemos un 33-12', 'Alerta: Botón de Pánico') :
    //   (tipoAlerta === 2) ? this.toastr.warning('Tenemos un 33-12', 'Alerta: Jammer') :  this.toastr.info('Tenemos un 33-12', 'Alerta: Paro de Motor');
    this.toastr.error('Tenemos un 33-12', 'Alerta: Botón de Pánico');
  }

  randomize(){

    this.showToastr();
    // this.beep( Math.floor( Math.random() * 3) );
    // this.showToastr( Math.floor( Math.random() * 3) );
  }

  alerts(){

    // let index = Math.floor( Math.random() * 6);
    // let hora = Math.floor( Math.random() * 24);
    // let minutos = hora + 30;
    // let alerta = Math.floor( Math.random() * 3);
    // this.vehicle = {id: this.vehicles[index].id, tipo: this.alertas[alerta], hora: `${hora}:${minutos}pm`, 
    // driver: 'Jorge Perez', ciudad: 'Torreón, Coahuila'};
    // this.beep( Math.floor( Math.random() * 3) );
    // this.showToastr( Math.floor( Math.random() * 3) );
  }
  

  beep( tipoAlerta ){
    const synth = new Tone.Synth().toDestination();
    (tipoAlerta == 1) ? synth.triggerAttackRelease('G6', '8n') :
      (tipoAlerta == 2) ? synth.triggerAttackRelease('B2', '8n') :  synth.triggerAttackRelease('D3', '8n');
  }

  beep1(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease('G6', '4n');
  }

  beep2(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease('F5', '4n');
  }

  beep3(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease('B5', '4n');
  }
}
