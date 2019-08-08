import { Component,OnInit } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,Event,NavigationEnd,NavigationError,NavigationStart,Router } from '@angular/router';
import { IImage } from './modules/slideshow/IImage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Test';
  constructor(private loadingBar: SlimLoadingBarService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }
   imageUrls: (string | IImage)[] = [
    { url: '../assets/slider/inet-slider1.png', caption: 'Our Client Stories', href: 'https://www.inetsoftwaresolutions.co.uk/testimonials' },
    { url: '../assets/slider/inet-slider2.jpg', clickAction: () => alert('custom click function') },
    { url: '../assets/slider/inet-slider4.jpg', caption: 'Contact Us', href: 'https://www.inetsoftwaresolutions.co.uk/contact-us' },
    '../assets/slider/inet-slider3.jpg',
    { url: '../assets/slider/inet-slider5.jpg', backgroundSize: 'contain', backgroundPosition: 'center' }
  ];
  height: string = '300px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  fullscreen: boolean = false;
  enableZoom: boolean = false;
  enablePan: boolean = false;

  ngOnInit() {
    // adding an image url dynamically.
    setTimeout(() => {
      console.log('adding an image url dynamically.');
      this.imageUrls.push('../assets/slider/inet-slider6.png');
    }, 2000);
    console.log(` Adding image dynamically`);
  }
}