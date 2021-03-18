import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindoneComponent } from './kindone.component';

describe('KindoneComponent', () => {
  let component: KindoneComponent;
  let fixture: ComponentFixture<KindoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
