import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(()=> {
        var button = document.getElementById('allContentButton'),
        divs = document.getElementsByClassName('allContentB');

            if(button) {
                button.addEventListener('mouseover', function() {
                  divs['0'].classList.add('animated');
                  divs['1'].classList.add('animated');
                });
            }

            if(button) {
                button.addEventListener('mouseout', function() {
                  divs['0'].classList.remove('animated');
                  divs['1'].classList.remove('animated');
                });
            }
      }, 1);
  }
}
