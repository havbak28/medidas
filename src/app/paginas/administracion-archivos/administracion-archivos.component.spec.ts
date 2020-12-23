import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionArchivosComponent } from './administracion-archivos.component';

describe('AdministracionArchivosComponent', () => {
  let component: AdministracionArchivosComponent;
  let fixture: ComponentFixture<AdministracionArchivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionArchivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
