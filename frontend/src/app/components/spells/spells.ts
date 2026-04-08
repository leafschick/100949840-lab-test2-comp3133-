import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CharacterService } from '../../services/character';
import { Spell } from '../../models/spell';

@Component({
  selector: 'app-spells',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './spells.html',
  styleUrl: './spells.css'
})
export class Spells implements OnInit {
  private characterService = inject(CharacterService);
  private cdr = inject(ChangeDetectorRef);

  allSpells: Spell[] = [];
  loadingText = 'Loading spells...';

  ngOnInit(): void {
    this.characterService.fetchAllSpells().subscribe({
      next: (response) => {
        console.log('spells response:', response);
        this.allSpells = response;
        this.loadingText = '';
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log('spells error:', err);
        this.loadingText = 'Unable to load spells right now.';
        this.cdr.detectChanges();
      }
    });
  }
}