import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EventsService } from '../../../services/events.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nuevo-evento-modal',
  templateUrl: './nuevo-evento-modal.component.html',
  styleUrls: ['./nuevo-evento-modal.component.css']
})
export class NuevoEventoModalComponent implements OnInit {
  title: string;
  closeBtnName: string;
  list: any[] = [];
  fileIdText: string;
  fileNameText: string;

  rebano: {
    category: string;
    event: string;
    quantity: string;
    weight: string;
    date: string;
    files: Array<{fileIdText: string, fileNameText: string}>; 
  }

  @Output() messageEvent = new EventEmitter<object>();

  constructor(private modalService: BsModalService, public bsModalRef: BsModalRef, private eventsService: EventsService) { }

  ngOnInit() {    
    this.rebano = {
      category: '',
      event: '',
      quantity: '',
      weight: '',
      date: '',
      files: []
    }
  }

  guardar(rebano){
    rebano.files.push({ fileIdText: this.fileIdText, fileNameText: this.fileNameText });
    this.eventsService.postEvento(rebano)
      .subscribe(data => {
        console.log('Evento Creado');
        console.log(rebano);
    });
      this.messageEvent.emit(rebano);
      this.bsModalRef.hide()
  } 

/*submit(form: NgForm){
    console.log(form.value);
    this.rebano.files.push({ fileIdText: this.fileIdText, fileNameText: this.fileNameText });
      this.eventsService.postEvento(form.value)
        .subscribe(data => {
          console.log('Evento Creado')
        });
      this.messageEvent.emit(this.rebano);
      this.bsModalRef.hide()
  } 
  */
  
 

}
