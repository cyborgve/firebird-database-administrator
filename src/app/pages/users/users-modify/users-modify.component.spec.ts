import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersModifyComponent } from './users-modify.component';

describe('UsersModifyComponent', () => {
  let component: UsersModifyComponent;
  let fixture: ComponentFixture<UsersModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersModifyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
