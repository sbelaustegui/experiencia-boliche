import {Component, OnInit} from '@angular/core';
import {timeout} from "rxjs/operators";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  festMode = false;
  headphonesItems = [
    'Conectá tus auriculares',
    'Subí el volumen',
    'Aumentá el brillo de tu pantalla',
    'Apagá las luces',
    'Cerrá los ojos',
    'Acercá la pantalla de tu teléfono a tus ojos',
    'Disfrutá la Experiencia Boliche!'
  ];
  festItems = [
    'Subí el volumen de tu dispositivo',
    'Aumentá el brillo de tu pantalla',
    'Apagá las luces',
    'Reproduce una canción desde "Experiencia"',
    'Apoyá tu teléfono en una mesa',
    'Disfrutá la Experiencia Boliche!'
  ];

  constructor() {
  }

  ngOnInit(): void {

    // Check dark mode
    //const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    //this.toggleDarkTheme(prefersDark.matches);
    //prefersDark.addEventListener("change",(mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));

    setTimeout(() => document.body.classList.toggle('dark', true), 1000)
  }

  toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  festModeToggle(){
    this.festMode = !this.festMode;
  }

}
