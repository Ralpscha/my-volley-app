import { Component, OnInit } from '@angular/core';
import { AanvraagService } from '../services/aanvraag.service';
import { Speler } from '../dtos/speler.model';
import { Team } from '../dtos/team.model';

@Component({
             selector: 'app-team',
             templateUrl: './team.component.html'
           })
export class TeamComponent implements OnInit {

  spelers: Speler [] = [];
  teams: Team [] = [];
  teamnummer: string = null;
  errormessage: string;
  teamnaam: string = null;


  constructor(
    private aanvraagService: AanvraagService
  ) {
  }

  ngOnInit() {

  }

  clearTeams() {
    this.teams = [];
  }

  clearSpelers() {
    this.spelers = [];
  }

  private getAllTeams() {
    this.clearTeams();
    return this.aanvraagService.getAllTeams().pipe().forEach((response: Team[]) => {
      this.teams = response;
    });
  }

  private getTeam() {
     const teamnaam = this.aanvraagService.getTeam(this.teamnummer).pipe().forEach(response => {
       this.teamnaam = response.teamnaam;
     });
  }

  private getSpelers() {
    this.clearSpelers();
    this.errormessage = null;
    this.teamnaam = null;
    if (this.teamnummer !== null) {
      return this.aanvraagService.getSpelers(this.teamnummer).pipe().forEach((response: Speler[]) => {
        if (response.length > 0) {
          this.getTeam();
          this.spelers = response;
          this.teamnummer = null;
        } else {
          this.errormessage = 'Helaas geen spelers van dit team gevonden';
          this.teamnummer = null;
        }
      });
    } else {
      this.errormessage = 'Vul een teamnummer in';
    }
  }
}
