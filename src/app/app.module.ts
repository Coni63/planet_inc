import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './features/background/background.component';
import { CardComponent } from './components/card/card.component';
import { BigNumberPipe } from './pipes/big-number.pipe';
import { PlanetsService } from './services/planets.service';
import { PlanetProductionComponent } from './components/planet-production/planet-production.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    CardComponent,
    BigNumberPipe,
    PlanetProductionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [
    PlanetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
