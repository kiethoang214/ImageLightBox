import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [];
  slideIndex = 0;
  ngOnInit() {
    this.images = [
      {
        id: 1,
        url: "https://media.thietthach.maytech.vn/uploads/2021/08/ben-sweet-2LowviVHZ-E-unsplash-1-21Aug2512472494.jpeg"
      },
      {
        id: 2,
        url: "https://media.thietthach.maytech.vn/uploads/2021/08/camera-21Aug2512472494.jpg"
      },
      {
        id: 3,
        url: "https://media.thietthach.maytech.vn/uploads/2021/08/pngtree-romantic-starry-sky-moonlight-reflection-image_2568-21Aug2512472496.jpg"
      },
      {
        id: 4,
        url: "https://media.thietthach.maytech.vn/uploads/2021/08/voi-21Aug2512472495.jpg"
      },
      {
        id: 5,
        url: "https://media.thietthach.maytech.vn/uploads/2021/08/ZiClJf-1920w-21Aug2512472505.jpg"
      }
    ]
  }

  openModal() {
    document.getElementById('imgModal').style.display = "block";
  }

  closeModal() {
    document.getElementById('imgModal').style.display = "none";
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(slideIndex);

  showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("img-slides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("images") as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) {
      this.slideIndex = 1
    }
    if (n < 1) {
      this.slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    if (dots && dots.length > 0) {
      dots[this.slideIndex - 1].className += " active";
    }
  }
}

