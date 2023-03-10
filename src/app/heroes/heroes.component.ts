import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  heroes: Hero[] =[];
  selectedHero?: Hero;
  @Input()
  public searchTerm = '';

  constructor(private heroService: HeroService, private messageService: MessageService ){}

  ngOnInit(): void{
    this.getHeroes();

  }

  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(x =>{
      console.log(x);
      this.heroes = x;
    })
  }

  onSelected(hero: Hero): void{
    this.messageService.add(`you selected Hero with id of ${hero.id} and name ${hero.name}`)
    console.log(hero);
    this.selectedHero = hero;
  }

  public get filteredItems() {
     
    return this.heroes.filter(hero => {
      return hero.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });

  }
  

}
function subscribe(arg0: (x: any) => void) {
  throw new Error('Function not implemented.');
}

