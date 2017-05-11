import { AppMaterialModule } from './material/material.module';
import { CardsEffects } from './store/cards/cards.effects';
import { CardsService } from './cards.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store';
import { CardSelectorComponent } from './card-selector/card-selector.component';
import { CardButtonComponent } from './card-selector/card-button/card-button.component';
import { SelectedCardComponent } from './card-selector/selected-card/selected-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CardSelectorComponent,
    CardButtonComponent,
    SelectedCardComponent,
    MainNavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(CardsEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    AppMaterialModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
