import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAdderButtonComponent } from './note-adder-button.component';

describe('NoteAdderButtonComponent', () => {
  let component: NoteAdderButtonComponent;
  let fixture: ComponentFixture<NoteAdderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteAdderButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteAdderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
