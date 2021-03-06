import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Player } from './player';
import { PLAYERS } from './mock-players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

    getPlayers(): Observable<Player[]> {
      return of(PLAYERS);
    }
    
    getPlayer(id: number): Observable<Player> {
      return of(PLAYERS.find(player => player.id === id));
    }

  constructor() { }
}
