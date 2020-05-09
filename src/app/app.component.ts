import {Component} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Plugins } from "@capacitor/core";

const { AdMob } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent{
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.platform.ready().then(() => {
        if (this.platform.is('ios')) {
          AdMob.initialize('ca-app-pub-6326566524185956~1131137434');//--> test ios
        } else if(this.platform.is('android')){
          AdMob.initialize('ca-app-pub-6326566524185956~8248523202');
        }
      })
    });
  }


}
