import { CardSelectorComponent } from './card-selector/card-selector.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterStoreModule } from '@ngrx/router-store';

const routes: Routes = [
  {
    path: '',
    children: [],
    component: CardSelectorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterStoreModule.connectRouter()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
