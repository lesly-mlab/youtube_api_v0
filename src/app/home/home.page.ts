import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import { ProviderService } from '../provider.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  videos = [];

  constructor(public navCtrl: NavController, public serviceProvider: ProviderService) {
    console.log('Getting videos');
    this.serviceProvider.getVideos().subscribe(data => {
      console.log(data);
      this.videos = data.items;
    });
  }

}
