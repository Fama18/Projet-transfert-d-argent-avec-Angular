import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emetteurs',
  templateUrl: './emetteurs.component.html'
})
export class EmetteursComponent implements OnInit {
  emetteurs : string[];
  constructor() {
    this.emetteurs = ["256321552", "sow", "Fama", "771450031"];
  }

  ngOnInit(): void {
  }

}
