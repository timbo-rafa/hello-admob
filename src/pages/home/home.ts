import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bannerConfig: AdMobFreeBannerConfig = {

    // add your config here
    // for the sake of this example we will just use the test config
    isTesting: true,
    autoShow: true
  };

  constructor(public navCtrl: NavController,
    private admobFree: AdMobFree) {
        
  }

  showBanner() {
     this.admobFree.banner.config(this.bannerConfig)
     this.admobFree.banner.prepare()
     .then(() => {
       // banner Ad is ready
       // if we set autoShow to false, then we will need to call the show method here
     })
     .catch(e => console.log(e));
  }

  showInterstitial() {
     this.admobFree.interstitial.config(this.bannerConfig)
     this.admobFree.interstitial.prepare()
    .then(() => {
    })
    .catch(e => console.log(e))
  }

}
