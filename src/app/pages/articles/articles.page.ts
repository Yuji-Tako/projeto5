import { Component, OnInit } from '@angular/core';

//1) Importa dependencias
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  //3)Cria atributo
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(

    //2) Injeta dependencias
    private firestore: AngularFirestore

  ) {
    //4)Obtém dados do database
    this.itemsCollection = firestore.collection<any>(
      'articles',
      ref => ref.where('status', '==', 'ativo').orderBy('date','desc')
      );
    this.items = this.itemsCollection.valueChanges({idField: "id"});
   }

  ngOnInit() {
  }

}
