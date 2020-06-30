import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Team } from '../dtos/team.model';
import { UrlService } from '../shared/urls/url.service';
import { Speler } from '../dtos/speler.model';
import { Wedstrijd } from '../dtos/wedstrijd.model';

@Injectable({
  providedIn: 'root'
})
export class AanvraagService {

  constructor(private http: HttpClient,
              private url: UrlService) {
  }

  getAllTeams(): Observable<Team[]> {
    // const url = this.url.volleybalService;
    const url = 'http://localhost:8080/team/teams';
    const teams = this.http.get<Team[]>(url);
    return teams.pipe(
                 map((response: Team[]) => response as Team[]),
                 catchError((error: HttpErrorResponse) => throwError(error))
               );
  }

  getSpelers(teamID): Observable<Speler[]> {
    const url = 'http://localhost:8080/team/' + teamID +'/spelers';
    const spelers = this.http.get<Speler[]>(url);
    return spelers.pipe(
      map(response => response as Speler[]),
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }

  getTeam(teamID): Observable<Team> {
    // const url = this.url.volleybalService;
    const url = 'http://localhost:8080/team/' + teamID + '/';
    const team = this.http.get<Team>(url);
    return team.pipe(
      map(response  => response as Team),
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }

  getWedstrijden(teamID): Observable<Wedstrijd[]> {
    const url = 'http://localhost:8080/team/' + teamID + '/events';
    const wedstrijden = this.http.get<Wedstrijd[]>(url);
    return wedstrijden.pipe(
      map(response  => response as Wedstrijd[]),
      catchError((error: HttpErrorResponse) => throwError(error))
    );

  }

  getSpelersWedstrijd(wedstrijdID): Observable<Speler[]> {
    const url = 'http://localhost:8080/team/' + wedstrijdID + '/wedstrijden';
    const spelers = this.http.get<Speler[]>(url);
    return spelers.pipe(
      map(response => response as Speler[]),
      catchError((error: HttpErrorResponse) => throwError(error))
    );

  }
}
