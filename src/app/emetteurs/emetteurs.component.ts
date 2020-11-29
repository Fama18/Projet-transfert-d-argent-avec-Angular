import { Component, OnInit } from '@angular/core';
import { Emetteur } from '../model/emetteur.model';

@Component({
  selector: 'app-emetteurs',
  templateUrl: './emetteurs.component.html'
})
export class EmetteursComponent implements OnInit {
  emetteurs: Emetteur[];
  constructor() {
    this.emetteurs = [
      {
        id : 3, numCni : '251522554', nom : 'sow', prenom : 'Fama', telephone : '771450031'},
      {
        id : 4, numCni : '5821585555', nom : 'diouf', prenom : 'Mariam', telephone : '771586547'}
    ];

  }

  ngOnInit(): void {
  }

}
