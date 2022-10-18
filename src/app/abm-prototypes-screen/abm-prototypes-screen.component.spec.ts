import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmPrototypesScreenComponent } from './abm-prototypes-screen.component';

describe('AbmPrototypesScreenComponent', () => {
  let component: AbmPrototypesScreenComponent;
  let fixture: ComponentFixture<AbmPrototypesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmPrototypesScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbmPrototypesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
