import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
// Processa botões das redes sociais
openSocial(name, profile) {
  window.open(`https://${name}.com/${profile}`);
  return false;
}
}
