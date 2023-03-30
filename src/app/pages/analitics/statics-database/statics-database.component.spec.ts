import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticsDatabaseComponent } from './statics-database.component';

describe('StaticsDatabaseComponent', () => {
  let component: StaticsDatabaseComponent;
  let fixture: ComponentFixture<StaticsDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticsDatabaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StaticsDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
