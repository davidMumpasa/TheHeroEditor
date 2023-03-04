import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService, private httpClient: HttpClient) { }

  getHero(id: number): Observable<Hero> {
    const hero = this.httpClient.get<Hero>('http://127.0.0.1:5000/detail/'+id.toString());
    this.messageService.add('The HeroService Fetched the Hero with id of ' + id.toString());
    return hero;
  }

 

  getHeroes(): Observable<Hero[]>{
    const heroes = this.httpClient.get<Hero[]>('http://127.0.0.1:5000/heroes');
    this.messageService.add('The HeroService Fetched the Heroes')
    return heroes;
  }

  updateHero(hero: Hero): Observable<Hero>{
    return this.httpClient.post<Hero>('http://127.0.0.1:5000/update',hero);
  }
}
