import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseDropComponent } from './database-drop.component';

describe('DatabaseDropComponent', () => {
  let component: DatabaseDropComponent;
  let fixture: ComponentFixture<DatabaseDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabaseDropComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DatabaseDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
