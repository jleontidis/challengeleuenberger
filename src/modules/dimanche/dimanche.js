import {HockeyService} from '../hockeyservice';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(HockeyService, Router)
export class Dimanche {  

  constructor(hockeyService, router) {
    this.router = router;
    this.hockeyService = hockeyService;
    this.matches = [];
    this.teams = [];
  }

  activate(){
    this.hockeyService.getSundayMatches()
    .then(response => this.matches = response)
    .catch(err => console.log(err));

    this.hockeyService.getTeams()
    .then(response => this.teams = response)
    .catch(err => console.log(err));
  }
}