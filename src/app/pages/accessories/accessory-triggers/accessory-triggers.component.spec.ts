import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryTriggersComponent } from './accessory-triggers.component';

describe('AccessoryTriggersComponent', () => {
  let component: AccessoryTriggersComponent;
  let fixture: ComponentFixture<AccessoryTriggersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoryTriggersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessoryTriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
