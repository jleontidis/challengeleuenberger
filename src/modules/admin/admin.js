import {HockeyService} from '../hockeyservice';
import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

@inject(HockeyService, HttpClient)
export class Admin {  

  constructor(hockeyService, httpClient) {
    this.hockeyService = hockeyService;
    this.httpClient = httpClient;
    this.selectedHomeTeamId = '';
    this.selectedAwayTeamId = '';
    this.selectedLocation = '';
    this.match_time = '';
    this.teams = [];
    this.matches = [];
  }

  activate() {
    this.hockeyService.getTeams()
    .then( response => this.teams = response)
    .catch( err => console.log(err) );

    this.hockeyService.getAdmin()
    .then( response => this.matches = response)
    .catch( err => console.log(err) );
  }


  submit() {
    var data = { 'team_home_id': this.selectedHomeTeamId, 'team_away_id': this.selectedAwayTeamId, 'match_time': this.match_time, 'location': this.selectedLocation};

    console.log(data);
    // this.httpClient.fetch('http://hockey.test/match',{
    //   body: JSON.stringify(data),
    //   credentials: 'same-origin',
    //   method: 'POST'
    // }).then(response => response.json());
  }

  updateMatch(half, match){
    var data = {};

    if( half === 'first') {
      data = { 
        'half': 'first', 
        'home_team': this.teams[match.team_home_id - 1].team_name, 
        'home_logo_url': this.teams[match.team_home_id - 1].logoUrl, 
        'away_team': this.teams[match.team_away_id - 1].team_name, 
        'away_logo_url': this.teams[match.team_away_id - 1].logoUrl, 
        'score_home': match.score_home, 
        'score_away': match.score_away, 
        'score_home_2': match.score_home_2, 
        'score_away_2': match.score_away_2,
        'game_played' : 1 
      }

    } else if (half === 'second') {
      data = { 
        'half': 'second', 
        'home_team': this.teams[match.team_home_id - 1].team_name, 
        'home_logo_url': this.teams[match.team_home_id - 1].logoUrl,
        'away_team': this.teams[match.team_away_id - 1].team_name, 
        'away_logo_url': this.teams[match.team_away_id - 1].logoUrl, 
        'score_home': match.score_home, 
        'score_away': match.score_away, 
        'score_home_2': match.score_home_2, 
        'score_away_2': match.score_away_2,
        'game_played' : 1  }   
    }


    this.httpClient.fetch(`http://jleontidis.info/hockey/public/hockeymatch/${match.id}`,{
      body: JSON.stringify(data),
      credentials: 'same-origin',
      method: 'PUT'
    }).then(response => response.json()).then(res => {
      alert('Match mis a jour avec success!');
    }).catch(err => {
      alert('Erreur. Veuillez ressayer ulteriement.');
  });
  }

  endMatch(match){

    var data = {};

    data = {'isFinished': 1 };

    this.httpClient.fetch(`http://hockey.test/hockeymatch/${match.id}`,{
      body: JSON.stringify(data),
      credentials: 'same-origin',
      method: 'PUT'
    }).then(response => response.json()).then(res => {
      alert('Match mis a jour avec success!');
    }).catch(err => {
      alert('Erreur. Veuillez ressayer ulteriement.');
  });
  }
}