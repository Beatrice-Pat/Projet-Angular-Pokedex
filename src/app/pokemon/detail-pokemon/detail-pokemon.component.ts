import { Component, OnInit } from '@angular/core';
//Accès à la route courante (service)
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../p.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})

export class DetailPokemonComponent implements OnInit {
    pokemonList: Pokemon[];
    pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService ) { }

  ngOnInit() {
    //snapshot : récupère les données à l'instanter
    const pokemonId : string | null = this.route.snapshot.paramMap.get('id');
    if(pokemonId) { //injection du service
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }
  //Redirige vers un autre router
  goToPokemonList() {
    this.router.navigate(['/pokemons'])
  }
  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['edit/pokemon', pokemon.id])
  }
}
