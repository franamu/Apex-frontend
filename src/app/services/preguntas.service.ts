import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor(private http: HttpClient) { }

  getPreguntas() {
    return this.http.get('https://franamuchastegui-apex-service.herokuapp.com/preguntas');
  }
}
