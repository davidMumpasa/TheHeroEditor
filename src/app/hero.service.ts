import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import Swal from 'sweetalert2';

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
    Swal.fire('Confirmation!', 'The Hero Has been Updated!', 'success');
    return this.httpClient.post<Hero>('http://127.0.0.1:5000/update',hero);
  }

  deleteHero(id: number): Observable<Hero>{
    const hero = this.httpClient.get<Hero>('http://127.0.0.1:5000/deleteHero/'+id.toString());

    return hero;
  }
  addHero(id: String,name: String): Observable<Hero>{
    const hero = {
      id: id,
      name: name
    }
    Swal.fire('success!', 'Hero successfully added!', 'success');
    return this.httpClient.post<Hero>('http://127.0.0.1:5000/addHero',hero);
  }
}
