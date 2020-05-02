import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';
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
  constructor(private platform: Platform, private splashScreen: SplashScreen, private media: Media,private statusBar: StatusBar, private streamingMedia: StreamingMedia) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }


  startAudio(){
    this.startDisabled = true;
    this.stopDisabled = false;

    this.file = this.media.create("https://expbnn.s3.amazonaws.com/TONES+AND+I+-+DANCE+MONKEY+(8D+AUDIO).mp3");

    this.file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes

    this.file.onSuccess.subscribe(() => this.result = 'Action is successful');

    this.file.onError.subscribe(error => this.result = 'Error!');

    this.file.play();

    setInterval(() => {
      this.file.getCurrentPosition().then((data) => this.result = data);
    }, 1000);
    

  }

  pauseAudio() {
    this.startDisabled = false;
    this.stopDisabled = true;
    this.file.stop();

    this.file.release();
  }
  



}
