import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPart3Component } from './nav-part3.component';

describe('NavPart3Component', () => {
  let component: NavPart3Component;
  let fixture: ComponentFixture<NavPart3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavPart3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavPart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
