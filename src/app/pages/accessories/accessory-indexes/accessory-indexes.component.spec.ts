import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryIndexesComponent } from './accessory-indexes.component';

describe('AccessoryIndexesComponent', () => {
  let component: AccessoryIndexesComponent;
  let fixture: ComponentFixture<AccessoryIndexesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoryIndexesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessoryIndexesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
