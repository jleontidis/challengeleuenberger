import moment from 'moment';
export class App {

  constructor(){}

  activate() {
    setInterval(()=>{
      this.currentTime = moment().format('DD.MM.YYYY HH:mm:ss');
    }, 1000);
  }

  configureRouter(config, router) {
    this.router = router;

    config.title = 'Leuenberger Challenge Cup 2018';
    config.map([
      { route: '', moduleId: './tablestanding/tablestanding', name: 'tablestanding', title: 'Home' },
      { route: 'home', moduleId: './tablestanding/tablestanding', name: 'tablestanding', nav: true, title: 'Home' },
      { route: 'score', moduleId:'./score/score', name: 'score', nav: true, title: 'Score'},
      { route: 'team', moduleId:'./team/team', name: 'team', title: 'Team'},
      { route: 'admin', moduleId:'./admin/admin', name: 'admin', nav: true, title: 'Administration samedi'},
      { route: 'dimanche', moduleId:'./dimanche/dimanche', name: 'dimanche', nav: true, title: 'Dimanche'}


    ]);
  }
}
