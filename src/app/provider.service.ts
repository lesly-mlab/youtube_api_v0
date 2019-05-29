import { Injectable } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

// tslint:disable-next-line:no-inferrable-types
channelId: string = 'UCn7NMZOakw4N6pQ-tQ9nkMQ';
// tslint:disable-next-line:no-inferrable-types
maxRes: string = '5';
// tslint:disable-next-line:no-inferrable-types
googleToken: string  = 'AIzaSyAlgBKSHbU5ANHTjG_QMxcO0U5X3gS1ucs';
search = 'mLabSAStudio';
posts: any = [];

  constructor(public navCtrl: NavController, public http: Http) {
   }
   getVideos() {
       // tslint:disable-next-line:max-line-length
    const url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAlgBKSHbU5ANHTjG_QMxcO0U5X3gS1ucs&channelId=UCn7NMZOakw4N6pQ-tQ9nkMQ&part=snippet,id&order=date&maxResults=5'; // + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxRes;
  //   this.http.get(url).subscribe(data => {this.posts = this.posts.push({list: data});
  //   // tslint:disable-next-line:align
  //   console.log(this.posts);
  // });

    return this.http.get(url).pipe(map(response => {
      return response.json();
    }));
   }

}
