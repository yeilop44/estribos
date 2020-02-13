import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebanoComponent } from './rebano.component';

describe('RebanoComponent', () => {
  let component: RebanoComponent;
  let fixture: ComponentFixture<RebanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
