import {HockeyService} from '../hockeyservice';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(HockeyService, Router)
export class Tablestanding {     
  constructor(hockeyService, router) {
    this.hockeyService = hockeyService;
    this.router = router;
    this.teams = [];
    this.results = [];
    this.updateTable();
    setInterval(() => this.updateTable(), 60 * 2000);
  }

  activate(){
        
    // setTimeout(()=>{
    //   this.router.navigate('score');
    // }, 120000);
  }

  updateTable() {
    this.hockeyService.getResults()
    .then(response => this.results = response)
    .catch(err => console.log(err));
 
  }


}