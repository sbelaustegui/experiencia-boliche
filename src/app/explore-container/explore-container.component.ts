import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  items = [];

  constructor() {
    this.items = [
        'Conectá tus auriculares',
        'Subí el volumen',
        'Aumentá el brillo de tu pantalla',
        'Apagá las luces',
        'Acercá la pantalla de tu teléfono a tus ojos',
        'Disfrutá la Experiencia Boliche!'
    ];
  }

  ngOnInit() {}

}
