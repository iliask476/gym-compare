import { Component, signal, computed, inject } from '@angular/core';
import { GymService } from '../../services/gym';
import { GymCard } from '../../components/gym-card/gym-card';

type SortOption = 'default' | 'price' | 'rating';

@Component({
  selector: 'app-gym-list',
  imports: [GymCard],
  templateUrl: './gym-list.html',
  styleUrl: './gym-list.css'
})
export class GymList {
  protected gymService = inject(GymService);

  searchTerm = signal('');
  sortBy = signal<SortOption>('default');
  onlyPool = signal(false);

  filteredGyms = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();

    let result = this.gymService.gyms().filter(gym =>
      gym.name.toLowerCase().includes(term) ||
      gym.address.toLowerCase().includes(term)
    );

    if (this.onlyPool()) {
      result = result.filter(gym => gym.hasPool === true);
    }

    if (this.sortBy() === 'price') {
      result = [...result].sort(
        (a, b) => (a.monthlyPrice ?? 1e9) - (b.monthlyPrice ?? 1e9)
      );
    } else if (this.sortBy() === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  });

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

  onSortChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.sortBy.set(select.value as SortOption);
  }

  onPoolChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.onlyPool.set(checkbox.checked);
  }
}