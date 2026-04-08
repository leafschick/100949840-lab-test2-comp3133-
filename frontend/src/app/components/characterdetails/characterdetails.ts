import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../services/character';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css'
})
export class CharacterdetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private characterService = inject(CharacterService);
  private cdr = inject(ChangeDetectorRef);

  selectedCharacter: any = null;

  ngOnInit(): void {
    const pickedCharacterId = this.route.snapshot.paramMap.get('id');
    console.log('Route ID:', pickedCharacterId);

    this.characterService.fetchAllCharacters().subscribe({
      next: (response) => {
        console.log('API Response:', response);

        const foundCharacter = response.find(
          (oneCharacter: any) => oneCharacter.id === pickedCharacterId
        );

        console.log('Found Character:', foundCharacter);

        this.selectedCharacter = foundCharacter || null;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log('Error loading character details:', err);
      }
    });
  }

  goBackToList(): void {
    this.router.navigate(['/']);
  }
}