import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqSendComponent } from './rfq-send.component';

describe('RfqSendComponent', () => {
  let component: RfqSendComponent;
  let fixture: ComponentFixture<RfqSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfqSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfqSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
