import { Injectable, signal } from '@angular/core';
import { Review } from '../models/review.model';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private reviews = signal<Review[]>([]);

  forGym(gymId: number): Review[] {
    return this.reviews().filter(r => r.gymId === gymId);
  }

  add(review: Review) {
    this.reviews.update(list => [...list, review]);
  }
}