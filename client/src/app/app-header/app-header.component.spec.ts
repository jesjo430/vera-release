import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatMenuModule} from "@angular/material/menu";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AppHeaderComponent} from './app-header.component';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppHeaderComponent],
      imports: [MatMenuModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
