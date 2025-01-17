import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudComponentComponent } from './crud-component.component';

describe('CrudComponentComponent', () => {
  let component: CrudComponentComponent;
  let fixture: ComponentFixture<CrudComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
