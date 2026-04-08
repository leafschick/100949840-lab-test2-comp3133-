import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css'
})
export class CharacterlistComponent implements OnInit {
  private characterService = inject(CharacterService);
  private router = inject(Router);

  allCharacters: Character[] = [];
  loadingMessage = 'Loading Harry Potter characters...';

  ngOnInit(): void {
    this.characterService.fetchAllCharacters().subscribe({
      next: (response) => {
        this.allCharacters = response;
      },
      error: () => {
        this.loadingMessage = 'Unable to load characters right now.';
      }
    });
  }

  openCharacterDetails(characterId: string): void {
    this.router.navigate(['/details', characterId]);
  }

  getVisibleCharacters(): Character[] {
    return this.allCharacters.filter((oneCharacter) => oneCharacter.name && oneCharacter.image);
  }
}