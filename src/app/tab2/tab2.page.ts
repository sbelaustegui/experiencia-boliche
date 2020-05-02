import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StreamingMedia, StreamingAudioOptions, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  result:string='nada2';
  file:MediaObject;
  startDisabled = false;
  stopDisabled = true;
  webVideo = {show: false, src: ''};

  constructor(private platform: Platform, private splashScreen: SplashScreen, 
    private media: Media,private statusBar: StatusBar, private streamingMedia: StreamingMedia) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }

  startVideo(){
    this.platform.ready().then(() => {
      if (this.platform.is('hybrid')) {
        let options: StreamingVideoOptions ={
          successCallback: () => {this.result = 'exito'},
          errorCallback: () => {this.result = 'error'},
          orientation:'landscape'
        }
        this.streamingMedia.playVideo('https://expbnn.s3.amazonaws.com/partusa.mov',options);
      } else {
          this.webVideo.show = true;
          this.webVideo.src = 'https://expbnn.s3.amazonaws.com/partusa.mov';
      }
    });
  }

}
