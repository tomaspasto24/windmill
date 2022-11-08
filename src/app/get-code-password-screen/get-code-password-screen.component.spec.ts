import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCodePasswordScreenComponent } from './get-code-password-screen.component';

describe('GetCodePasswordScreenComponent', () => {
  let component: GetCodePasswordScreenComponent;
  let fixture: ComponentFixture<GetCodePasswordScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCodePasswordScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCodePasswordScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
