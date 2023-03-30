import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesDropComponent } from './tables-drop.component';

describe('TablesDropComponent', () => {
  let component: TablesDropComponent;
  let fixture: ComponentFixture<TablesDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablesDropComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TablesDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
