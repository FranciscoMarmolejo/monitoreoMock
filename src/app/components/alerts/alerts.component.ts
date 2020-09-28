import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent{

  constructor() { }

  show = false;
  more = false;
  vehicle = {id: 'N/A', tipo: 'N/A', hora: 'N/A', driver: 'N/A', ciudad: 'N/A'};

  vehicles: any[] = [ 
    { id: '1-701', alertA: 1, alertB: 0, alertC: 0},
    { id: '2-501', alertA: 0, alertB: 1, alertC: 0},
    { id: '3-231', alertA: 0, alertB: 0, alertC: 0},
    { id: '4-671', alertA: 0, alertB: 0, alertC: 0},
    { id: '5-781', alertA: 0, alertB: 0, alertC: 2},
    { id: '6-351', alertA: 0, alertB: 0, alertC: 0},
    { id: '3-861', alertA: 0, alertB: 1, alertC: 0},
    { id: '4-431', alertA: 0, alertB: 0, alertC: 0},
    { id: '5-001', alertA: 4, alertB: 0, alertC: 0},
    { id: '6-701', alertA: 0, alertB: 8, alertC: 0},
  ];  

  alertas: any[] = [ 'Botón de Pánico', 'Jammer', 'Paro de motor'];

  drop(){

    this.show = !this.show;
  }

  showMore(){

    this.more = !this.more;
  }

  randomize(){

    let index = Math.floor( Math.random() * 6);
    let hora = Math.floor( Math.random() * 24);
    let minutos = hora + 30;
    let alerta = Math.floor( Math.random() * 3);
    this.vehicle = {id: this.vehicles[index].id, tipo: this.alertas[alerta], hora: `${hora}:${minutos}pm`, driver: 'Jorge Perez', ciudad: 'Torreón, Coahuila'};

  }

}
