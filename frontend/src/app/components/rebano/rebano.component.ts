import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { NuevoEventoModalComponent } from './nuevo-evento-modal/nuevo-evento-modal.component'


@Component({
  selector: 'app-rebano',
  templateUrl: './rebano.component.html',
  styleUrls: ['./rebano.component.css']
})
export class RebanoComponent implements OnInit {
 
 rebanos: any[] = [];
 mensajes: any[] = []; 
  
 bsModalRef: BsModalRef;

   
  constructor(private eventsService: EventsService, private modalService: BsModalService) { }

  ngOnInit() {
     this.getEventos();

  }

  getEventos(){
    this.eventsService.getEventos()
      .subscribe((data: any) => {        
        this.rebanos= data.Items;
        console.log(this.rebanos);
      });    
  }

  openModalEvento(){
    const initialState = {
      list: this.rebanos,
      title: 'Nuevo Evento'
    };
    this.bsModalRef = this.modalService.show( NuevoEventoModalComponent,Object.assign({}, { class: 'gray modal-lg', initialState} ));
    this.bsModalRef.content.messageEvent.subscribe(data => {
      console.log('Child component\'s event was triggered:', data);
      this.mensajes.push( data);
      console.log(this.mensajes);
      this.getEventos();
    });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
