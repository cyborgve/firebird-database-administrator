import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryUserDefinedFunctionsComponent } from './accessory-user-defined-functions.component';

describe('AccessoryUserDefinedFunctionsComponent', () => {
  let component: AccessoryUserDefinedFunctionsComponent;
  let fixture: ComponentFixture<AccessoryUserDefinedFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoryUserDefinedFunctionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessoryUserDefinedFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
