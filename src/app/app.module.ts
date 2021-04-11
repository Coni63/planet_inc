import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ng2-tooltip-directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './features/game/game.component';
import { HeaderComponent } from './features/header/header.component';
import { StoryComponent } from './features/story/story.component';
import { BackgroundComponent } from './features/background/background.component';
import { CardComponent } from './components/card/card.component';
import { PlanetProductionComponent } from './components/planet-production/planet-production.component';
import { PlanetStorageComponent } from './components/planet-storage/planet-storage.component';
import { PlanetFleetComponent } from './components/planet-fleet/planet-fleet.component';
import { PlanetTravelComponent } from './components/planet-travel/planet-travel.component';
import { PlanetConsumptionComponent } from './components/planet-consumption/planet-consumption.component';
import { TooltipCostComponent } from './components/tooltip-cost/tooltip-cost.component';
import { AchievementsComponent } from './features/achievements/achievements.component';

import { BigNumberPipe } from './pipes/big-number.pipe';
import { PlanetsService } from './services/planets.service';
import { TbdComponent } from './components/tbd/tbd.component';


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
    HeaderComponent,
    GameComponent,
    StoryComponent,
    AchievementsComponent,
    TbdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    TooltipModule
  ],
  providers: [
    PlanetsService,
    BigNumberPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
