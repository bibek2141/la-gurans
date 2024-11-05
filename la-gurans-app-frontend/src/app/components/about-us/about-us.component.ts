import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  slides: Slide[] = [
    { image: 'img1.jpg', caption: 'Gurkha Cup, San Francisco, 2023' },
    { image: 'img2.jpg', caption: 'Gurkha Cup, San Francisco, 2023 35+' },
    { image: 'img3.jpg', caption: 'New Year Cup, Seattle, 2022' },
    { image: 'img5.jpg', caption: 'NAC, Baltimore, 2022' },
    { image: 'img6.jpg', caption: 'Dashain Cup, Dallas Texas, 2022' },
    { image: 'img7.jpg', caption: 'Bay Area Cup, San Francisco, 2020' },
    { image: 'img8.jpg', caption: 'Dashain Cup, Dallas Texas, 2019' },
    { image: 'img9.jpg', caption: 'Dashain Cup, Dallas Texas, 2018' },
    { image: 'img10.jpg', caption: 'Gurkha Cup, San Francisco, 2018' },
    { image: 'img14.jpg', caption: 'NAC, Virgina, 2018' },
    { image: 'img11.jpg', caption: 'Sunday League, Pomona, 2018' },
    { image: 'img13.jpg', caption: 'New Year Cup, Dallas Texas, 2017' },
    { image: 'img12.jpg', caption: 'Bay Area Cup, San Francisco, 2017' },
    { image: 'img15.jpg', caption: 'NAC, Dallas Texas, 2017' },
  ];
}

interface Slide {
  image: string;
  caption: string;
}
