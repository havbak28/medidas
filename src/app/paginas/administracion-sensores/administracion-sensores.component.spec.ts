import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionSensoresComponent } from './administracion-sensores.component';

describe('AdministracionSensoresComponent', () => {
  let component: AdministracionSensoresComponent;
  let fixture: ComponentFixture<AdministracionSensoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionSensoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionSensoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
