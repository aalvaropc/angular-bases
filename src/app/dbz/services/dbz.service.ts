import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";
@Injectable({
  providedIn: 'root'
})

export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  onNewCharacterPadre(character: Character): void {
    const newCharacter = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(index:string){
    this.characters = this.characters.filter(character => character.id !== index);
    //this.characters.splice(index, 1);
  }

}
