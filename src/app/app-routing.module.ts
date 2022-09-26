import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Lis les routes du haut vers le bas donc le ** toujours en dernier!
const routes: Routes = [
  //Déclarer les routes les + spécifiques à la plus normale
  { path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent } //intercepte toutes les routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
