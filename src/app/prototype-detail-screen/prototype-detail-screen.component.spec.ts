import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypeDetailScreenComponent } from './prototype-detail-screen.component';

describe('PrototypeDetailScreenComponent', () => {
  let component: PrototypeDetailScreenComponent;
  let fixture: ComponentFixture<PrototypeDetailScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrototypeDetailScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrototypeDetailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
