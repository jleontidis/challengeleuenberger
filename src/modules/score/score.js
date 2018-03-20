import {HockeyService} from '../hockeyservice';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(HockeyService, Router)
export class Score {  

  constructor(hockeyService, router) {
    this.router = router;
    this.hockeyService = hockeyService;
    this.matches = [];
    this.teams = [];
  }

  activate(){
    this.hockeyService.getMatches()
    .then(response => this.matches = response)
    .catch(err => console.log(err));

    this.hockeyService.getTeams()
    .then(response => this.teams = response)
    .catch(err => console.log(err));

    setTimeout(()=>{
      this.router.navigate('home');
    }, 120000);
  }
}