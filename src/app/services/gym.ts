import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gym } from '../models/gym.model';

@Injectable({ providedIn: 'root' })
export class GymService {
  private http = inject(HttpClient);

  private gymsState = signal<Gym[]>([]);
  readonly gyms = this.gymsState.asReadonly();
  readonly loading = signal(true);
  readonly error = signal(false);

  constructor() {
    this.load();
  }

  private load() {
    this.http.get<Gym[]>('/gyms.json').subscribe({
      next: data => {
        this.gymsState.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      },
    });
  }

  getById(id: number): Gym | undefined {
    return this.gymsState().find(gym => gym.id === id);
  }
}