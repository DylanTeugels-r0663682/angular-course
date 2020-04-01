import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAttributeComponent } from './test-attribute.component';

describe('TestAttributeComponent', () => {
  let component: TestAttributeComponent;
  let fixture: ComponentFixture<TestAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
