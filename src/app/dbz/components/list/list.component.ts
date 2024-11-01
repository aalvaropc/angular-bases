import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Naruto',
      power: 15000
    },
  ];


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  public onDeletedCharacter(indice: string | undefined): void {
    this.onDelete.emit(indice);
  }

}
