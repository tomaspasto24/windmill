import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindmillCardComponent } from './windmill-card.component';

describe('WindmillCardComponent', () => {
  let component: WindmillCardComponent;
  let fixture: ComponentFixture<WindmillCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindmillCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindmillCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
