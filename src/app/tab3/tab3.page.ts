import {Component} from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{

  darkMode: boolean = true;

  constructor() {}

  darkModeToggle() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }

}
