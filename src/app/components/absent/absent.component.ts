import { Component } from '@angular/core';
import { Personne, PERSONNES } from 'src/app/mocks/personnes.mock';

@Component({
  selector: 'app-absent',
  templateUrl: './absent.component.html',
  styleUrls: ['./absent.component.css'],
})
export class AbsentComponent {
  personnes: Personne[] = PERSONNES;
  personnesAbsentHomme: Personne[] = [];
  personnesAbsentFemme: Personne[] = [];
  ngOnInit() {
    this.personneAbsentGenre();
  }
  personneAbsentGenre() {
    this.personnes.forEach((personne) => {
      if (personne.genre == 'femme' && !personne.isPresent) {
        this.personnesAbsentFemme.push(personne);
      } else if (personne.genre == 'homme' && !personne.isPresent) {
        this.personnesAbsentHomme.push(personne);
      }
    });
  }
  removeInGenre(pearsonneGenre: Personne[], name: string) {
    pearsonneGenre = pearsonneGenre.filter((personne) => {
      if (personne.name === name) {
        personne.isPresent = true;
      }
    });
    return pearsonneGenre;
  }
  removeAbsentPerson(name: string) {
    this.personnesAbsentFemme = this.removeInGenre(
      this.personnesAbsentFemme,
      name
    );
    this.personnesAbsentHomme = this.removeInGenre(
      this.personnesAbsentHomme,
      name
    );
    this.personneAbsentGenre();
  }
}
