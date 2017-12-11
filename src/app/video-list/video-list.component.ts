import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = 'Video List';
  today; // https://angular.io/docs/ts/latest/guide/pipes.html
  listofvideos = [
    {
      name: 'Item 1',
      slug: 'item-1',
      embed: `KMX1mFEmM3E`
    },
    {
      name: 'Item 2',
      slug: 'item-2',
      embed: `4i2pOzcz3Zo`
    },
    {
      name: 'Item 3',
      slug: 'item-3',
      embed: null
    },
  ];
  constructor() { }

  ngOnInit() {
    this.today = new Date();
  }

  getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed;
  }

}
