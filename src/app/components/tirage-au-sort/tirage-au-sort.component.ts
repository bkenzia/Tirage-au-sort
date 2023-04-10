import { Component } from '@angular/core';
import { Personne, PERSONNES } from 'src/app/mocks/personnes.mock';

@Component({
  selector: 'app-tirage-au-sort',
  templateUrl: './tirage-au-sort.component.html',
  styleUrls: ['./tirage-au-sort.component.css'],
})
export class TirageAuSortComponent {
  personnes: Personne[] = PERSONNES;
  indexEleveSort: number = -1;
  isSelected = false;
  elevesPresent: Personne[] = [];
  stockSort: Personne[] = [];
  index: number = -1;
  presentEleves(): Personne[] {
    this.personnes.forEach((element) => {
      const foundElement = this.elevesPresent.find((ele) => ele == element);
      if (element.isPresent && foundElement == null) {
        this.elevesPresent.push(element);
      }
    });

    return this.elevesPresent;
  }
  presentLastSort = this.presentEleves().filter(
    (ele) => ele != this.elevesPresent[this.indexEleveSort]
  );

  sort() {
    if (this.presentEleves() != null && this.presentLastSort.length >= 1) {
      console.log('present', this.presentLastSort);

      this.index = Math.floor(Math.random() * this.presentLastSort.length);
      this.isSelected = true;
      console.log('indexPresent', this.index);

      this.indexEleveSort = this.presentEleves().findIndex(
        (element) => element == this.presentLastSort[this.index]
      );

      this.presentLastSort = this.presentLastSort.filter(
        (ele) => ele != this.elevesPresent[this.indexEleveSort]
      );
    } else if (this.presentLastSort.length <= 1) {
      this.indexEleveSort = Math.floor(
        Math.random() * this.presentEleves().length
      );
      this.isSelected = true;
    }
  }
}
