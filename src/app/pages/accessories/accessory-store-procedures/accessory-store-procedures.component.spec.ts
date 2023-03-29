import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryStoreProceduresComponent } from './accessory-store-procedures.component';

describe('AccessoryStoreProceduresComponent', () => {
  let component: AccessoryStoreProceduresComponent;
  let fixture: ComponentFixture<AccessoryStoreProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoryStoreProceduresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessoryStoreProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
