import {Component, OnInit} from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

declare let audioinput: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit{

  BUFFER_SIZE: number = 16384;
  startDisabled: boolean =  true;
  stopDisabled: boolean =  true;

  constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      window.addEventListener('audioinput', (event: any) => {
        // Do some stuff with input sound
        // event: Float32Array
        // '#'+(Math.random()*0xFFFFFF<<0).toString(16);        // Get Color from number, ex. Math.Random()
        console.log(event.data);
      }, false);

      audioinput.checkMicrophonePermission((hasPermission) => {
        if (hasPermission) {
          console.log("We already have permission to record.");
          this.startDisabled = false;
        }
        else {
          // Ask the user for permission to access the microphone
          audioinput.getMicrophonePermission((hasPermission, message) => {
            if (hasPermission) {
              console.log("User granted us permission to record.");
              this.startDisabled = false;
            } else {
              console.warn("User denied permission to record.");
            }
          });
        }
      });
    });
  }

  startRecording() {
      audioinput.start({
        bufferSize: this.BUFFER_SIZE,
        streamToWebAudio: false,
        normalize: true,
        channels: audioinput.CHANNELS.MONO,
        sampleRate: audioinput.SAMPLERATE.CD_AUDIO_44100Hz,
      });
    this.startDisabled = true;
    this.stopDisabled = false;
  }

  stopRecording() {
    audioinput.stop();
    this.startDisabled = false;
    this.stopDisabled = true;
  }



}
