import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrototypeCardComponent } from './prototype-card.component';

describe('PrototypeCardComponent', () => {
  let component: PrototypeCardComponent;
  let fixture: ComponentFixture<PrototypeCardComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrototypeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrototypeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
