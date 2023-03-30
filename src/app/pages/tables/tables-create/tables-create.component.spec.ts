import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesCreateComponent } from './tables-create.component';

describe('TablesCreateComponent', () => {
  let component: TablesCreateComponent;
  let fixture: ComponentFixture<TablesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablesCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TablesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
