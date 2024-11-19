import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatateRosmarinoComponent } from './patate-rosmarino.component';

describe('PatateRosmarinoComponent', () => {
  let component: PatateRosmarinoComponent;
  let fixture: ComponentFixture<PatateRosmarinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatateRosmarinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatateRosmarinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
