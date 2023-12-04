import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPart2Component } from './nav-part2.component';

describe('NavPart2Component', () => {
  let component: NavPart2Component;
  let fixture: ComponentFixture<NavPart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavPart2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
