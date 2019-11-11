import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  preguntas: any[] = [];
  updated: String = '';
  loading: boolean;

  constructor( private preguntasService: PreguntasService) {
    this.loading = true;
    this.preguntasService.getPreguntas()
        .subscribe( (data: any) => {
          console.log(data);
          this.preguntas = data.result;
          this.updated =  data.updated;
          //this.loading = false;
        })

  }

  ngOnInit() {
  }

}
