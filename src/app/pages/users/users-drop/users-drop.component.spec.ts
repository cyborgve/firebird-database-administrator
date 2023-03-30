import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDropComponent } from './users-drop.component';

describe('UsersDropComponent', () => {
  let component: UsersDropComponent;
  let fixture: ComponentFixture<UsersDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersDropComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
