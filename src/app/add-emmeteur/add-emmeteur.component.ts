import { Component, OnInit } from '@angular/core';
import { Emetteur } from "../model/emetteur.model";

@Component({
  selector: 'app-add-emmeteur',
  templateUrl: './add-emmeteur.component.html'
})
export class AddEmmeteurComponent implements OnInit {

  newEmetteur = new Emetteur();
  constructor() { }

  ngOnInit(): void {
  }

  addEmetteur() {
    console.log(this.newEmetteur);
  }

}
