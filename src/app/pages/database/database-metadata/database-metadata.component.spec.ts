import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseMetadataComponent } from './database-metadata.component';

describe('DatabaseMetadataComponent', () => {
  let component: DatabaseMetadataComponent;
  let fixture: ComponentFixture<DatabaseMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabaseMetadataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DatabaseMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
