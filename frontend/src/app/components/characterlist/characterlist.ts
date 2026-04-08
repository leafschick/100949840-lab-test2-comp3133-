import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character';
import { CharacterfilterComponent } from '../characterfilter/characterfilter';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule, CharacterfilterComponent],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css'
})
export class CharacterlistComponent implements OnInit {
  private characterService = inject(CharacterService);
  private router = inject(Router);

  allCharacters: Character[] = [];
  displayedCharacters: Character[] = [];
  loadingMessage = 'Loading Harry Potter characters...';

  ngOnInit(): void {
    this.characterService.fetchAllCharacters().subscribe({
      next: (response) => {
        this.allCharacters = response.filter(
          (oneCharacter) => oneCharacter.name && oneCharacter.image
        );
        this.displayedCharacters = this.allCharacters;
      },
      error: () => {
        this.loadingMessage = 'Unable to load characters right now.';
      }
    });
  }

  openCharacterDetails(characterId: string): void {
    this.router.navigate(['/details', characterId]);
  }

  filterCharactersByHouse(selectedHouse: string): void {
    if (!selectedHouse) {
      this.displayedCharacters = this.allCharacters;
      return;
    }

    this.displayedCharacters = this.allCharacters.filter(
      (oneCharacter) => oneCharacter.house === selectedHouse
    );
  }
}