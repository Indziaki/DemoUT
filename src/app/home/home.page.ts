import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selected = 1;
  score = 4;
  creador = '@JAF'

  scores = [
    {
      first: {
        logo: "https://sportsgroundproduction.blob.core.windows.net/cometcache/comet/logo/44538",
        score: 3
      },
      second: {
        logo: "https://i.pinimg.com/originals/e0/60/16/e06016a84948047611b3cda139ec3c35.png",
        score: 4
      }
    },
    {
      first: {
        logo: "http://www.osaa.org/images/school_logos/128x128/NorthSalem.png",
        score: 1
      },
      second: {
        logo: "http://www.pesfutebol.com/download/ekstraklasa.png",
        score: 1
      }
    },
    {
      first: {
        logo: "https://seatgeek.com/images/performer_logos/5866/1/256x256.png?c=5c1cfb",
        score: 5
      },
      second: {
        logo: "https://trentonhealthteam.org/wp-content/uploads/favicon-1-2.png",
        score: 2
      }
    }
  ]
  lastGame = {
    first: {
      name: 'Equipo 1',
      logo: "https://www.toralarm.com/api/proxy/images/ta/images/teams/11033242/256/",
      score: 3
    },
    second: {
      name: 'Equipo 2',
      logo: "https://ehasp.fireside.fm/assets/logo/logo-256x256-1b9cff0eaea622bb3cd0ae098de31080dd3e0473f3b2ed285279abc1661f3f16.png",
      score: 4
    }
  }

  constructor() {}

  select(index){
    this.selected=index;
  }

}
