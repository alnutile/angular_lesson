import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { error } from 'selenium-webdriver';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();

  }

  onSelect(hero: Hero): void {
    this.messageService.add("Hero chosen " + hero.name);
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes,
        error => console.log(error)
      );
  }
}
