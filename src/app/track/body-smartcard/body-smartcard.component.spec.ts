import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySmartcardComponent } from './body-smartcard.component';

describe('BodySmartcardComponent', () => {
  let component: BodySmartcardComponent;
  let fixture: ComponentFixture<BodySmartcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodySmartcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySmartcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
