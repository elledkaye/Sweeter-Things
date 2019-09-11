import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent  {
  images = [
    { img: "./assets/img/blogimg3.jpeg", thumb: "./assets/img/blogimg3.jpeg", description: "Image 1"},
    { img: "./assets/img/macaroonbundle3.jpeg", thumb: "./assets/img/macaroonbundle3.jpeg", description: "Image 2" },
    { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg", description: "Image 3" },
    { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg", description: "Image 4" },
    { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg", description: "Image 5" },
    { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg", description: "Image 6" },
    { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg", description: "Image 7" },
    { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg", description: "Image 8" },
    { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg", description: "Image 9" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
