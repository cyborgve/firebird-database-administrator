import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryViewsComponent } from './accessory-views.component';

describe('AccessoryViewsComponent', () => {
  let component: AccessoryViewsComponent;
  let fixture: ComponentFixture<AccessoryViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoryViewsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessoryViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
