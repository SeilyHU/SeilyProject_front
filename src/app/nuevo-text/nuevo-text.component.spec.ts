import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTextComponent } from './nuevo-text.component';

describe('NuevoTextComponent', () => {
  let component: NuevoTextComponent;
  let fixture: ComponentFixture<NuevoTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
