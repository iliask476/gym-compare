import { Component, input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gym } from '../../models/gym.model';
import { CompareService } from '../../services/compare';

@Component({
  selector: 'app-gym-card',
  imports: [RouterLink],
  templateUrl: './gym-card.html',
  styleUrl: './gym-card.css'
})
export class GymCard {
  gym = input.required<Gym>();
  compare = inject(CompareService);
}