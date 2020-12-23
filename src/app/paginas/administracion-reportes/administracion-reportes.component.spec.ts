import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionReportesComponent } from './administracion-reportes.component';

describe('AdministracionReportesComponent', () => {
  let component: AdministracionReportesComponent;
  let fixture: ComponentFixture<AdministracionReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionReportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
