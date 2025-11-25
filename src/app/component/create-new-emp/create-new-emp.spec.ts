import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewEmp } from './create-new-emp';

describe('CreateNewEmp', () => {
  let component: CreateNewEmp;
  let fixture: ComponentFixture<CreateNewEmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewEmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewEmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
