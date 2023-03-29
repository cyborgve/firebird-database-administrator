import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryDomainsComponent } from './accessory-domains.component';

describe('AccessoryDomainsComponent', () => {
  let component: AccessoryDomainsComponent;
  let fixture: ComponentFixture<AccessoryDomainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoryDomainsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessoryDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
