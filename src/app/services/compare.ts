import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CompareService {
  readonly maxItems = 3;

  private selectedIds = signal<number[]>([]);

  readonly ids = this.selectedIds.asReadonly();
  readonly count = computed(() => this.selectedIds().length);
  readonly isFull = computed(() => this.count() >= this.maxItems);

  isSelected(id: number): boolean {
    return this.selectedIds().includes(id);
  }

  toggle(id: number) {
    this.selectedIds.update(ids => {
      if (ids.includes(id)) return ids.filter(x => x !== id);
      if (ids.length >= this.maxItems) return ids;
      return [...ids, id];
    });
  }

  clear() {
    this.selectedIds.set([]);
  }
}