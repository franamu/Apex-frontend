import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  preguntas: any[] = [];
  updated: String = '';

  constructor( private http: HttpClient) {
    this.http.get('https://franamuchastegui-apex-service.herokuapp.com/preguntas')
          .subscribe( (data: any) => {
            this.preguntas = data.result;
            this.updated = data.updated;
              console.log(data);
            });
  }

  ngOnInit() {
  }

}
