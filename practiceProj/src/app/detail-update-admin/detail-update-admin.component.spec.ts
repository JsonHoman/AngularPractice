import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUpdateAdminComponent } from './detail-update-admin.component';

describe('DetailUpdateAdminComponent', () => {
  let component: DetailUpdateAdminComponent;
  let fixture: ComponentFixture<DetailUpdateAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailUpdateAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailUpdateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
