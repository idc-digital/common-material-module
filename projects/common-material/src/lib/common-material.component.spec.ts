import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonMaterialComponent } from './common-material.component';

describe('CommonMaterialComponent', () => {
  let component: CommonMaterialComponent;
  let fixture: ComponentFixture<CommonMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
