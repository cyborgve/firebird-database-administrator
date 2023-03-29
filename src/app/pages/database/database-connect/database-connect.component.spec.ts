import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseConnectComponent } from './database-connect.component';

describe('DatabaseConnectComponent', () => {
  let component: DatabaseConnectComponent;
  let fixture: ComponentFixture<DatabaseConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabaseConnectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DatabaseConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
