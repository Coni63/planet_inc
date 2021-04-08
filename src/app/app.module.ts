import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './features/background/background.component';
import { CardComponent } from './components/card/card.component';
import { BigNumberPipe } from './pipes/big-number.pipe';
import { PlanetsService } from './services/planets.service';
import { PlanetProductionComponent } from './components/planet-production/planet-production.component';
import { PlanetStorageComponent } from './components/planet-storage/planet-storage.component';
import { StorageService } from './services/storage.service';
import { PlanetFleetComponent } from './components/planet-fleet/planet-fleet.component';
import { PlanetTravelComponent } from './components/planet-travel/planet-travel.component';

import { TooltipModule } from 'ng2-tooltip-directive';
import { TooltipCostComponent } from './components/tooltip-cost/tooltip-cost.component';
import { PlanetConsumptionComponent } from './components/planet-consumption/planet-consumption.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    CardComponent,
    PlanetProductionComponent,
    PlanetStorageComponent,
    PlanetFleetComponent,
    PlanetTravelComponent,
    TooltipCostComponent,
    PlanetConsumptionComponent,
    BigNumberPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    TooltipModule
  ],
  providers: [
    StorageService,
    PlanetsService,
    BigNumberPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
