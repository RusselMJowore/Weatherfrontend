import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivedayforcastComponent } from './fivedayforcast.component';

describe('FivedayforcastComponent', () => {
  let component: FivedayforcastComponent;
  let fixture: ComponentFixture<FivedayforcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FivedayforcastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FivedayforcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
