import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendElementsComponent } from './send-elements.component';

describe('SendElementsComponent', () => {
  let component: SendElementsComponent;
  let fixture: ComponentFixture<SendElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
