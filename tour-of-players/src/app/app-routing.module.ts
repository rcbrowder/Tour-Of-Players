import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
    { path: 'players', component: PlayersComponent }
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
