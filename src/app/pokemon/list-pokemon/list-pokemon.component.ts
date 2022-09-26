import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../p.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit{
  pokemonList: Pokemon[];

  constructor(
    private router: Router,
    private pokemonService: PokemonService
    ) {}

    //Le service qui donne la liste des pokémons
    ngOnInit() {
      this.pokemonList = this.pokemonService.getPokemonList();
    }
    
    goToPokemon(pokemon: Pokemon) {
      this.router.navigate(['/pokemon', pokemon.id])
    }

}
