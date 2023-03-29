import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryGeneratorsComponent } from './accessory-generators.component';

describe('AccessoryGeneratorsComponent', () => {
  let component: AccessoryGeneratorsComponent;
  let fixture: ComponentFixture<AccessoryGeneratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoryGeneratorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessoryGeneratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
