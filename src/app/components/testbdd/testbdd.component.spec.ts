import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBddComponent } from './testbdd.component';

describe('TestBddComponent', () => {
  let component: TestBddComponent;
  let fixture: ComponentFixture<TestBddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestBddComponent]
    });
    fixture = TestBed.createComponent(TestBddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
