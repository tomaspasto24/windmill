import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkScreenComponent } from './work-screen.component';

describe('WorkScreenComponent', () => {
  let component: WorkScreenComponent;
  let fixture: ComponentFixture<WorkScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
