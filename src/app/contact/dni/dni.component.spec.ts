import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DniComponent } from './dni.component';

describe('DniComponent', () => {
  let component: DniComponent;
  let fixture: ComponentFixture<DniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DniComponent]
    });
    fixture = TestBed.createComponent(DniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
