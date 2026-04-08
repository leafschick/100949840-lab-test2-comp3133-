import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CharacterService } from '../../services/character';
import { Movie } from '../../models/movies';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies implements OnInit {
  private characterService = inject(CharacterService);
  private cdr = inject(ChangeDetectorRef);

  allMovies: Movie[] = [];
  loadingText = 'Loading movies...';

  ngOnInit(): void {
    this.characterService.fetchAllMovies().subscribe({
      next: (response) => {
        console.log('movies response:', response);
        this.allMovies = response;
        this.loadingText = '';
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log('movies error:', err);
        this.loadingText = 'Unable to load movies.';
        this.cdr.detectChanges();
      }
    });
  }
}