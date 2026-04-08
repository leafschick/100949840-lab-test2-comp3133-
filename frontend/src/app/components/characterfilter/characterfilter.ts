import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css'
})
export class CharacterfilterComponent {
  @Output() houseChanged = new EventEmitter<string>();

  selectedHouse = '';

  houseOptions: string[] = [
    '',
    'Gryffindor',
    'Slytherin',
    'Hufflepuff',
    'Ravenclaw'
  ];

  onHouseSelect(): void {
    this.houseChanged.emit(this.selectedHouse);
  }
}