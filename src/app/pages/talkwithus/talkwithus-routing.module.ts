import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalkwithusPage } from './talkwithus.page';

const routes: Routes = [
  {
    path: '',
    component: TalkwithusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TalkwithusPageRoutingModule {}
