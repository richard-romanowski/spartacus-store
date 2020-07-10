import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyBoughtComponent } from './recently-bought.component';

describe('RecentlyBoughtComponent', () => {
  let component: RecentlyBoughtComponent;
  let fixture: ComponentFixture<RecentlyBoughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyBoughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyBoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
