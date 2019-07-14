import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcGraphSelectorComponent } from './wc-graph-selector.component';

describe('WcGraphSelectorComponent', () => {
  let component: WcGraphSelectorComponent;
  let fixture: ComponentFixture<WcGraphSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcGraphSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcGraphSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
