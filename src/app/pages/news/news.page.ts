import { Component, OnInit } from '@angular/core';

// 1) Importa dependências
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

    // 3) Atributos

     // API Key obtida de http://newsapi.org
    private apiKey= '257ff88d3a3a4c598996b030d454eb96';

     // Palavra chave para buscas de notícias
    private apiQuery= 'russia';

     // Quantas notícias serão exibidas (máx. 20)
    private apiItens = 10;

     // Endereço da API
    private apiURL = `https://newsapi.org/v2/everything?apiKey=${this.apiKey}&source=google-news-br&language=pt&q=${this.apiQuery}`;
    
     // Armazena as notícias
    public newsList: any;
    constructor(

    // 2) Injetar dependências
    public httpc: HttpClient
  ) { }

  ngOnInit() {

    // 4) Obtém as notícias via HTTP
    this.httpc.get(this.apiURL).subscribe(

      // Quando os dados forem recebidos
      (data: any) => {

        //Obtém as notícias e armazena em apiNewsList
        this.newsList = data.articles.slice(0, this.apiItens);
      }
    );
  }
    // 5) Abra o site com a notícia completa
    newOpen(url: string){
      window.open(url);
      return false;
    }
}
