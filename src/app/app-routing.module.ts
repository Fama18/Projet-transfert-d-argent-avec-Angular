import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmetteursComponent } from './emetteurs/Emetteurs.Component';
import { AddEmmeteurComponent } from './add-emmeteur/add-emmeteur.component';

const routes: Routes = [
  {path : "emetteurs", component : EmetteursComponent},
  {path : "add-emetteur", component : AddEmmeteurComponent},
  {path : "", redirectTo: "emetteurs", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
