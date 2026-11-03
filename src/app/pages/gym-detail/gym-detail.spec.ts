import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GymDetail } from './gym-detail';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// imports: [RouterLink, ReactiveFormsModule],

describe('GymDetail', () => {
  let component: GymDetail;
  let fixture: ComponentFixture<GymDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(GymDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
