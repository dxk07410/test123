import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicflowComponent } from './basicflow.component';

describe('BasicflowComponent', () => {
  let component: BasicflowComponent;
  let fixture: ComponentFixture<BasicflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
