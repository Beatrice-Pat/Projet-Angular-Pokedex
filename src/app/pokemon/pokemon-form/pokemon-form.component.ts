import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../p.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
 //passe une proprièté d'entrée (input)
 @Input() pokemon: Pokemon;
  types: string[];

  constructor(
    private pokemonService : PokemonService,
    private router: Router
    ) { }

  ngOnInit() {
    //Liste des pokémons
    this.types = this.pokemonService.getPokemonTypeList();
  }
  //vérifie que le type est déjà dans son paramètre
  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }
  //modifie le type cocher et décocher
  selectType($event: Event, type: string){
    const checkboxElt = $event.target as HTMLInputElement;
    const isChecked = checkboxElt.checked;
//condition si l'utilisateur coche la case
    if(isChecked) {
      this.pokemon.types.push(type);
    } 
    //quand la case est décochée, ça retire le type du tableau 
    else {
      if (this.pokemon.types.length === 1) {
        checkboxElt.checked = true;
        return;
      }
      const index = this.pokemon.types.indexOf(type);
      //modifie le tableau (splice)
      this.pokemon.types.splice(index, 1);
    }
  }
   //quand l'utilisateur soumettra le formulaire
  onSubmit() {
    console.log('Formulaire soumis!');
//redirige l'utilisateur sur la page du pokémon édité
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }
  //Limite 1 type min à 3 types max
  isTypesValid(type: string): boolean {
    //pourra décocher la case cochée que si max 3 autres sont cochées, et grisera les autres
    if(this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }
    return true;
  }
}
