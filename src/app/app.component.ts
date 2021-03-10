import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Artigos', url: '/articles', icon: 'at' },
    { title: 'Notícias', url: '/news', icon: 'newspaper' },
    { title: 'Fale Conosco', url: '/talkwithus', icon: 'people-circle' },
    { title: 'Sobre', url: '/about', icon: 'aperture' },
  ];
  constructor() {}
}
