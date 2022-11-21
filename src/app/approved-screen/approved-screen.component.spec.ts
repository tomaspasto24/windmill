import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedScreenComponent } from './approved-screen.component';

describe('ApprovedScreenComponent', () => {
  let component: ApprovedScreenComponent;
  let fixture: ComponentFixture<ApprovedScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
