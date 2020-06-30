import { Team } from './team.model';
import { Speler } from './speler.model';

export class Wedstrijd {
  constructor(
    public typeEvent: string,
    public weekdag: string,
    public starttijd: string,
    public thuisteam: Team,
    public tegenstander: Team,
    public aanwezigeSpelers: Speler[],
    public eindtijd?: string
    // public eventID?: number
  ) {
  }
}


