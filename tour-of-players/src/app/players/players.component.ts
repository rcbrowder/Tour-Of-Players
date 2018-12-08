import { Component, OnInit } from '@angular/core';
import { Player } from '../hero';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

    players: Player;
    onSelect(player: Player): void {
        this.selectedPlayer = player;
    }

    players = PLAYERS;

    getPlayers(): void {
        this.players = this.playerService.getPlayers();
    }



  constructor(private PlayerService: PlayerService) { }

  ngOnInit() {
      this.getPlayers();
  }

}
