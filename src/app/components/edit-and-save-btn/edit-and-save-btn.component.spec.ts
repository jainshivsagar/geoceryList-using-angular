import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAndSaveBtnComponent } from './edit-and-save-btn.component';

describe('EditAndSaveBtnComponent', () => {
  let component: EditAndSaveBtnComponent;
  let fixture: ComponentFixture<EditAndSaveBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAndSaveBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAndSaveBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
