import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  private options = {
    scopes: 'profile',
    webClientId: '90569454171-8025obdri021ubbr5tfgqo8dpag1v6gt.apps.googleusercontent.com'
  }

  constructor(private googlePlus:GooglePlus) { }

  ngOnInit() {
  }
  slidesLoad(slides) {
    slides.startAutoplay();
  }
  async googleLogin(){
    var res = await this.googlePlus.login(this.options);
}

}
