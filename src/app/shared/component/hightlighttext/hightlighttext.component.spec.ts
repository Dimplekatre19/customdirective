import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightlighttextComponent } from './hightlighttext.component';

describe('HightlighttextComponent', () => {
  let component: HightlighttextComponent;
  let fixture: ComponentFixture<HightlighttextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HightlighttextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HightlighttextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
