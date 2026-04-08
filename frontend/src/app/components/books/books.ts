import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CharacterService } from '../../services/character';
import { Book } from '../../models/books';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './books.html',
  styleUrl: './books.css'
})
export class Books implements OnInit {
  private characterService = inject(CharacterService);
  private cdr = inject(ChangeDetectorRef);

  allBooks: Book[] = [];
  loadingText = 'Loading books...';

  ngOnInit(): void {
    this.characterService.fetchAllBooks().subscribe({
      next: (response) => {
        console.log('books response:', response);
        this.allBooks = response;
        this.loadingText = '';
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log('books error:', err);
        this.loadingText = 'Unable to load books.';
        this.cdr.detectChanges();
      }
    });
  }
}