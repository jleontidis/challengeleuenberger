import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class Team {     
  constructor(httpClient) {

    this.httpClient = httpClient;
    this.team_name = '';
    this.logo_url = '';
  }

  submit() {

    var data = { 'team_name': this.team_name, 'logoUrl': this.logo_url}

    this.httpClient.fetch('http://hockey.test/team',{
      body: JSON.stringify(data),
      credentials: 'same-origin',
      method: 'POST'
    }).then(response => response.json());
  }
}