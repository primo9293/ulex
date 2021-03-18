import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindtwoComponent } from './kindtwo.component';

describe('KindtwoComponent', () => {
  let component: KindtwoComponent;
  let fixture: ComponentFixture<KindtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
