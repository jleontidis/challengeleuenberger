import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class HockeyService {
    
    constructor(httpClient) {
        this.httpClient = httpClient;
       // this.baseUrl = 'http://jleontidis.info/hockey/public/';
        this.baseUrl = 'http://hockey.test/';
    }

    getMatches() {
        return this.httpClient.fetch(this.baseUrl + 'hockeymatch')
        .then(response =>  response.json())
        .catch(err=> console.log(err));
    }

    getTeams() {
        return this.httpClient.fetch(this.baseUrl + 'team')
        .then(response => response.json())
        .catch(err => console.log(err));
    }

    getResults() {
        return this.httpClient.fetch(this.baseUrl + 'result')
        .then(response => response.json())
        .catch(err => console.log(err));
    }

    getAdmin() {
        return this.httpClient.fetch(this.baseUrl + 'admin')
        .then(response => response.json())
        .catch(err => console.log(err));
    }


    endOfMatch( isFinished , match_id){

        var data = {};

        data = {'isFinished': isFinished };

        return this.httpClient.fetch(`http://hockey.test/${match_id}`,{
            body: JSON.stringify(data),
            credentials: 'same-origin',
            method: 'PUT'
          })
          .then(response => response.json())
          .catch(err => console.log(err));
    }

    getSundayMatches(){
    
    return this.httpClient.fetch(this.baseUrl + 'hockeymatch')
        .then(response => response.json())
        .catch(err => console.log(err));
    }
}