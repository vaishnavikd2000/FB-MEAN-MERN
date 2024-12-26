import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SIgnInComponent } from './sign-in.component';

describe('SIgnInComponent', () => {
  let component: SIgnInComponent;
  let fixture: ComponentFixture<SIgnInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SIgnInComponent]
    });
    fixture = TestBed.createComponent(SIgnInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
