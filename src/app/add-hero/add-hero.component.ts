import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import Swal from 'sweetalert2';

import {Location} from '@angular/common'

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) {}

  public id = '';
  public name = '';

  public submitForm() {
    console.log('Form submitted');
  }

  addHero(): void{

    if (this.id == "" && this.name==""){
      Swal.fire('Warning!', 'Please fill the form!', 'error');
    } else{
      this.heroService.addHero(this.id,this.name).subscribe();
    }
  }

  ngOnInit(): void {
   
  }

}
