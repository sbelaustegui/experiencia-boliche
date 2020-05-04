import {Component, OnInit} from '@angular/core';
import {timeout} from "rxjs/operators";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

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

}
