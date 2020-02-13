import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Evento} from '../models/event';


@Injectable({
  providedIn: 'root'
})
export class EventsService {
  
  selectedEvento: Evento; 
  urlApi = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {
    this.selectedEvento = new Evento();
  }
  
  getEventos() {
    const httpOptions = {
          headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})};
    return this.http.get(this.urlApi, httpOptions);
  }

  postEvento(evento: Evento) {
    const httpOptions = {
          headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})};
    return this.http.post(this.urlApi, evento, httpOptions);
  }



}
