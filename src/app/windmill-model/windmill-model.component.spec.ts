import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindmillModelComponent } from './windmill-model.component';

describe('WindmillModelComponent', () => {
  let component: WindmillModelComponent;
  let fixture: ComponentFixture<WindmillModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindmillModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindmillModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
