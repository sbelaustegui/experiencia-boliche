import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { Media } from '@ionic-native/media/ngx';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdMobFree } from "@ionic-native/admob-free/ngx";


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StreamingMedia,
    Media,
    AdMobFree
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
