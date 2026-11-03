import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GymService } from '../../services/gym';
import { CompareService } from '../../services/compare';
import { Gym } from '../../models/gym.model';

@Component({
  selector: 'app-compare',
  imports: [RouterLink],
  templateUrl: './compare.html',
  styleUrl: './compare.css'
})
export class Compare {
  private gymService = inject(GymService);
  protected compareService = inject(CompareService);

  gyms = computed(() =>
    this.compareService
      .ids()
      .map(id => this.gymService.getById(id))
      .filter((g): g is Gym => g !== undefined)
  );

cheapestId = computed(() => {
  const list = this.gyms().filter(g => g.monthlyPrice !== undefined);
  if (list.length < 2) return null;
  return list.reduce((a, b) => (b.monthlyPrice! < a.monthlyPrice! ? b : a)).id;
});

  bestRatedId = computed(() => {
    const list = this.gyms();
    if (list.length < 2) return null;
    return list.reduce((a, b) => (b.rating > a.rating ? b : a)).id;
  });
}