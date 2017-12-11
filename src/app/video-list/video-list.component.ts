import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy {
  private req: any;
  listofvideos: [any];
  title = 'Video List';
  today; // https://angular.io/docs/ts/latest/guide/pipes.html

  constructor(private http: Http) { }

  ngOnInit() {
    this.today = new Date();
    this.req = this.http.get('assets/json/videos.json').subscribe(data => {
      console.log(data.json());
      this.listofvideos = data.json();
    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

  getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed;
  }

}
