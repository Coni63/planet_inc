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
import { ItemsService } from './services/items.service';
import { PlanetStorageComponent } from './components/planet-storage/planet-storage.component';
import { StorageService } from './services/storage.service';
import { PlanetFleetComponent } from './components/planet-fleet/planet-fleet.component';
import { PlanetTravelComponent } from './components/planet-travel/planet-travel.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    CardComponent,
    BigNumberPipe,
    PlanetProductionComponent,
    PlanetStorageComponent,
    PlanetFleetComponent,
    PlanetTravelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [
    StorageService,
    PlanetsService,
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
