import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() updated: String = '';

  constructor() { }

  ngOnInit() {
  }

}
