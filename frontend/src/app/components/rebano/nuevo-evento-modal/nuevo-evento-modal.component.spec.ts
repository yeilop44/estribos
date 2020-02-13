import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEventoModalComponent } from './nuevo-evento-modal.component';

describe('NuevoEventoModalComponent', () => {
  let component: NuevoEventoModalComponent;
  let fixture: ComponentFixture<NuevoEventoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoEventoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEventoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
