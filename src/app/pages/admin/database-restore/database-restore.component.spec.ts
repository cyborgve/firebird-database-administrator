import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseRestoreComponent } from './database-restore.component';

describe('DatabaseRestoreComponent', () => {
  let component: DatabaseRestoreComponent;
  let fixture: ComponentFixture<DatabaseRestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabaseRestoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DatabaseRestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
