import { Component, OnInit } from '@angular/core';
import { AanvraagService } from '../services/aanvraag.service';
import { Speler } from '../dtos/speler.model';
import { Team } from '../dtos/team.model';
import { Wedstrijd } from '../dtos/wedstrijd.model';

@Component({
             selector: 'app-team',
             templateUrl: './team.component.html'
           })
export class TeamComponent implements OnInit {

  spelers: Speler [] = [];
  spelersWed: Speler [] = [];
  teams: Team [] = [];
  wedstrijden: Wedstrijd [] = [];
  teamnummer: string = null;
  teamnummerWed: string = null;
  errormessage: string;
  teamnaam: string = null;
  teamnaamWed: string = null;
  wedstrijdnummer: string = null;
  errormessageSpelWed: string;
  errormessageWed: string;



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
    this.errormessage = null;
    this.teamnummer = null;
    this.teamnaam = null;
  }

  clearSpelersWedstrijden() {
    this.spelersWed = [];
    this.errormessageSpelWed = null;
    this.wedstrijdnummer = null;
  }

  clearWedstrijden() {
    this.wedstrijden = [];
    this.errormessageWed = null;
    this.teamnummerWed = null;
    this.teamnaamWed = null;
  }

  getWedstrijden() {
    this.wedstrijden =[];
    this.errormessageWed = null;
    if (this.teamnummerWed !== null) {
      return this.aanvraagService.getWedstrijden(this.teamnummerWed).pipe().forEach((response: Wedstrijd[]) => {
        if (response.length > 0) {
          this.getTeamWedstrijden();
          this.wedstrijden = response;
          this.teamnummerWed = null;
        } else {
          this.errormessageWed = 'Helaas geen wedstrijden van dit team gevonden';
          this.teamnummerWed = null;
        }
      });
    } else {
      this.errormessageWed = 'Vul een teamnummer in';
    }
  }

  getSpelersWedstrijd() {
    this.spelersWed = null;
    this.errormessageSpelWed = null;
    if (this.wedstrijdnummer !== null) {
      return this.aanvraagService.getSpelersWedstrijd(this.wedstrijdnummer).pipe().forEach((response: Speler[]) => {
        if (response.length > 0) {
          this.spelersWed = response;
          this.wedstrijdnummer = null;
        } else {
          this.errormessageSpelWed = 'Helaas geen spelers voor deze wedstrijd beschikbaar';
          this.wedstrijdnummer = null;

        }
      });
    } else {
      this.errormessageSpelWed = 'Vul een wedstrijdnummer in';
    }

  }

  private getAllTeams() {
    this.clearTeams();
    return this.aanvraagService.getAllTeams().pipe().forEach((response: Team[]) => {
      this.teams = response;
    });
  }

  private getTeam() {
    this.aanvraagService.getTeam(this.teamnummer).pipe().forEach(response => {
      this.teamnaam = response.teamnaam;
    });
  }

  private getTeamWedstrijden() {
    this.aanvraagService.getTeam(this.teamnummerWed).pipe().forEach(response => {
      this.teamnaamWed = response.teamnaam;
    });
  }

  private getSpelers() {
    this.spelers = [];
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
