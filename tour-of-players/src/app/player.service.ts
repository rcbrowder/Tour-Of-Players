import { Injectable } from '@angular/core';
import { Player} from './player';
import { PLAYERS } from './mock-players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  getPlayers(): Player[] {
      return PLAYERS;
  }

  constructor() { }
}
