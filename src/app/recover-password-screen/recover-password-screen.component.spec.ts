import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPasswordScreenComponent } from './recover-password-screen.component';

describe('RecoverPasswordScreenComponent', () => {
  let component: RecoverPasswordScreenComponent;
  let fixture: ComponentFixture<RecoverPasswordScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverPasswordScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverPasswordScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
