import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowElementsComponent } from './show-elements.component';

describe('ShowElementsComponent', () => {
  let component: ShowElementsComponent;
  let fixture: ComponentFixture<ShowElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
