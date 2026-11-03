import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GymService } from '../../services/gym';
import { ReviewService } from '../../services/review';

@Component({
  selector: 'app-gym-detail',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './gym-detail.html',
  styleUrl: './gym-detail.css'
})
export class GymDetail {
  private route = inject(ActivatedRoute);
  private reviewService = inject(ReviewService);
  private fb = inject(FormBuilder);
  protected gymService = inject(GymService);

  private id = Number(this.route.snapshot.paramMap.get('id'));

  gym = computed(() => this.gymService.getById(this.id));
  reviews = computed(() => this.reviewService.forGym(this.id));

  form = this.fb.nonNullable.group({
    author: ['', [Validators.required, Validators.minLength(2)]],
    rating: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
    comment: ['', [Validators.required, Validators.minLength(10)]],
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.reviewService.add({ gymId: this.id, ...this.form.getRawValue() });
    this.form.reset();
  }
  mapsUrl = computed(() => {
    const g = this.gym();
    if (!g) return '';
    const query = encodeURIComponent(`${g.name} ${g.address}`);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  });
}