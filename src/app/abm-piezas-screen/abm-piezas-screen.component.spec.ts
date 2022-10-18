import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmPiezasScreenComponent } from './abm-piezas-screen.component';

describe('AbmPiezasScreenComponent', () => {
  let component: AbmPiezasScreenComponent;
  let fixture: ComponentFixture<AbmPiezasScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmPiezasScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbmPiezasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
