import { Component, OnInit } from '@angular/core';
import { AanvraagService } from '../services/aanvraag.service';
import { Speler } from '../dtos/speler.model';

@Component({
             selector: 'app-team',
             templateUrl: './team.component.html'
           })
export class TeamComponent implements OnInit {

  teamnaam: string = 'we hebben nog geen naam';
  speler: Speler = new Speler('onbekend', 0, 'geen', 'geen positie');
  spelers: Speler [] = [this.speler];

  constructor(
    private aanvraagService: AanvraagService
  ) {
  }

  ngOnInit() {
  }

  private getTeamnaam() {
    this.clearAll();
    return this.aanvraagService.getTeamnaam(1).pipe().forEach((naam: string) => {
      this.teamnaam = naam;
    });
  }

  private getSpelers() {
    this.clearAll();
    return this.aanvraagService.getSpelers(1).pipe().forEach((response:Speler[]) => {
      this.spelers = response;
    });
  }

  clearAll() {
    this.teamnaam = 'we hebben nog geen naam';
    this.speler = new Speler('onbekend', 0, 'geen', 'geen positie');
    this.spelers = [this.speler];
  }
}
