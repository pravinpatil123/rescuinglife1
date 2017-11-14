import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import {UploadListPage} from '../pages/upload-list/upload-list'
import {UploadDetailsPage} from '../pages/upload-details/upload-details'

import {SearchPage} from '../pages/search/search' 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SearchPage;
@ViewChild(Nav) nav:Nav;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  /**
   * openPage
   */
  public goToHome() {
    this.nav.setRoot(HomePage);
  }

  public goToUploadList() { 
    this.nav.setRoot(UploadListPage);
  }

  public goToSearchPage(){
    this.nav.push(SearchPage);
  }


}