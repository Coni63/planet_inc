import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchievementsComponent } from './features/achievements/achievements.component';
import { GameComponent } from './features/game/game.component';
import { StoryComponent } from './features/story/story.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/game',
    pathMatch: 'full'
  },
  { 
    path: 'game', 
    component: GameComponent 
  },
  { 
    path: 'achievements', 
    component: AchievementsComponent 
  },
  { 
    path: 'story', 
    component: StoryComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
