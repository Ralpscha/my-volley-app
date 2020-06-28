import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Team } from '../dtos/team.model';
import { UrlService } from '../shared/urls/url.service';
import { Speler } from '../dtos/speler.model';

@Injectable({
  providedIn: 'root'
})
export class AanvraagService {

  constructor(private http: HttpClient,
              private url: UrlService) {
  }

  getTeamnaam(teamID): Observable<string> {
    // const url = this.url.volleybalService;
    const url = 'http://localhost:8080/team/' + teamID;
    const teamnaam = this.http.get<Team>(url);
    const reply = teamnaam.pipe(
                 map((response: Team) => response.teamnaam),
                 catchError((error: HttpErrorResponse) => throwError(error))
               );
    console.log('teamnaam:' + reply);
    return reply;
  }

  getSpelers(teamID): Observable<Speler[]> {
    const url = 'http://localhost:8080/team/' + teamID +'/spelers';
    const speler = this.http.get<Speler[]>(url);
    const reply = speler.pipe(
      map(response => response as Speler[]),
      catchError((error: HttpErrorResponse) => throwError(error))
    );
    console.log('speler:' + reply);
    return reply;
  }
}
