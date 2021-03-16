import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TalkwithusPageRoutingModule } from './talkwithus-routing.module';
import { TalkwithusPage } from './talkwithus.page';

// 1) Importa módulo Reactive Forms
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TalkwithusPageRoutingModule,
    // 2) Importa ReactiveFormsModule
    ReactiveFormsModule
  ],
  declarations: [TalkwithusPage]
})
export class TalkwithusPageModule {}
