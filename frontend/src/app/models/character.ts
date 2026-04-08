export interface Character {
  id: string;
  name: string;
  house: string;
  image: string;
  species: string;
  wizard: boolean;
  ancestry: string;
  actor: string;
  gender: string;
  dateOfBirth: string;
  yearOfBirth: number;
  eyeColour: string;
  hairColour: string;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  alive: boolean;
  wand: {
    wood: string;
    core: string;
    length: number | null;
  };
}