import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameDemoComponent } from './frame-demo.component';

describe('FrameDemoComponent', () => {
  let component: FrameDemoComponent;
  let fixture: ComponentFixture<FrameDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
