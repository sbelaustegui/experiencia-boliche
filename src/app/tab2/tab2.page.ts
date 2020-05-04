import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { LoadingController } from '@ionic/angular';
import { Plugins, Toast } from "@capacitor/core";
import { AdOptions, AdSize, AdPosition } from "capacitor-admob";

const { AdMob } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  loading: boolean = true;
  adReady = false;
  result: string;
  file: MediaObject;

  webVideo = { show: false, src: '' };
  regex = RegExp(/_/g);
  videos;

  constructor(private platform: Platform, private splashScreen: SplashScreen,
    private media: Media, private statusBar: StatusBar,
    private streamingMedia: StreamingMedia,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();


      if (this.platform.is('hybrid')) {

        const options: AdOptions = {
          //adId: 'ca-app-pub-3940256099942544/6300978111',
          //adId: 'ca-app-pub-3940256099942544/1033173712',
          adId: 'ca-app-pub-6326566524185956/9667338661',//--> test ios
          autoShow: false,
          isTesting: false
        }
        AdMob.prepareInterstitial(options)
          .then(
            (value) => {
              if (value) {
                this.adReady = true;
              }
              console.log(value);  // true
            },
            (error) => {
              console.error(error); // show error
            }
          );

      }

    });
    this.getList();
  }

  showInterstitial() {
    AdMob.showInterstitial().then(
      (value) => {
        console.log(value);  // true
      },
      (error) => {
        console.error(error); // show error
      }
    );
  }

  startVideo(id) {
    if (this.adReady) {
      this.adReady = false;
      this.showInterstitial();
    } else {

      let selectedVideo = this.videos.find(video => video.ETag === id).Key;
      this.platform.ready().then(() => {
        if (this.platform.is('hybrid')) {
          let options: StreamingVideoOptions = {
            successCallback: () => { this.result = 'exito' },
            errorCallback: () => { this.result = 'error' },
            orientation: 'landscape'
          }
          this.streamingMedia.playVideo('https://expbnn.s3.amazonaws.com/' + selectedVideo, options);
        } else {
          this.webVideo.show = true;
          this.webVideo.src = 'https://expbnn.s3.amazonaws.com/' + selectedVideo;
        }
      });
    }
  }

  getList() {
    let bucket = 'expbnn';
    let region = 'us-east-1';
    let prefix = '';
    fetch(this.getIndexUrl(bucket, region, prefix))
      .then(response => response.text())
      .then(str => (new DOMParser()).parseFromString(str, "text/xml"))
      .then(data => {
        const obj = this.xml2json(data);
        this.videos = obj.ListBucketResult.Contents;
        this.loading = false;
      })
  }

  getIndexUrl(bucket, region, prefix) {
    return 'https://s3.' + region + '.amazonaws.com/' + bucket + '/?delimiter=/&prefix=' + prefix;
  }

  /**
   * This function coverts a DOM Tree into JavaScript Object.
   * @param srcDOM: DOM Tree to be converted.
   */
  xml2json(srcDOM) {
    let children = [...srcDOM.children];

    // base case for recursion.
    if (!children.length) {
      return srcDOM.innerHTML
    }

    // initializing object to be returned.
    let jsonResult = {};

    for (let child of children) {

      // checking is child has siblings of same name.
      let childIsArray = children.filter(eachChild => eachChild.nodeName === child.nodeName).length > 1;

      // if child is array, save the values as array, else as strings.
      if (childIsArray) {
        if (jsonResult[child.nodeName] === undefined) {
          jsonResult[child.nodeName] = [this.xml2json(child)];
        } else {
          jsonResult[child.nodeName].push(this.xml2json(child));
        }
      } else {
        jsonResult[child.nodeName] = this.xml2json(child);
      }
    }

    return jsonResult;
  }

}
