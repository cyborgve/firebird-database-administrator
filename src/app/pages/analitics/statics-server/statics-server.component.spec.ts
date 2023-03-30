import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticsServerComponent } from './statics-server.component';

describe('StaticsServerComponent', () => {
  let component: StaticsServerComponent;
  let fixture: ComponentFixture<StaticsServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticsServerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StaticsServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
