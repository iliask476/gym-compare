import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GymList } from './gym-list';

describe('GymList', () => {
  let component: GymList;
  let fixture: ComponentFixture<GymList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymList],
    }).compileComponents();

    fixture = TestBed.createComponent(GymList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
