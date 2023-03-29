import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryExceptionsComponent } from './accessory-exceptions.component';

describe('AccessoryExceptionsComponent', () => {
  let component: AccessoryExceptionsComponent;
  let fixture: ComponentFixture<AccessoryExceptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoryExceptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessoryExceptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
