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
    this.items = ['Conectá tus auriculares', 'Subí el volumen', 'Aumentá el brillo de tu pantalla', 'Apagá las luces', 'Poné tu telefono de pantalla cerca de tus ojos', 'Disfruta la Experiencia Boliche!'];
  }

  ngOnInit() {}

}
