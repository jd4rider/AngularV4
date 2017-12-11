import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  /* homeImageList = [
    {image: 'assets/images/nature/4.jpg', title: 'Image 4', link: '/videos/video-1'},
    {image: 'assets/images/nature/5.jpg', title: 'Image 5', link: '/videos/video-2'},
    {image: 'assets/images/nature/6.jpg', title: 'Image 6', link: '/videos/video-3'}
  ] */
  private req: any;
  homeImageList = [];
  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.req = this.http.get('assets/json/videos.json').subscribe(data => {
      data.json().filter(item => {
        console.log(item.featured);
        if (item.featured) {
          this.homeImageList.push(item);
        }
      });
    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

  preventNormal(event: MouseEvent, image: any) {
    if (!image.prevented) {
      event.preventDefault();
      //image.link = '/videos';
      //image.prevented = true;
      this.router.navigate(['./videos']);
    }
  }

}
