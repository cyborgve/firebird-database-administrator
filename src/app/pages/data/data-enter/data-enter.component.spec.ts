import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEnterComponent } from './data-enter.component';

describe('DataEnterComponent', () => {
  let component: DataEnterComponent;
  let fixture: ComponentFixture<DataEnterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataEnterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
