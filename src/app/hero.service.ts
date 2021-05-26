import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'http://localhost:3000/heroes';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('Alunos buscado');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
   
    const hero = HEROES.find(h => h.id === id) as Hero;
    this.messageService.add(`ID do Aluno =${id}`);
    return of(hero);
  }
}
