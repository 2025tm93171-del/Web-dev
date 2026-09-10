import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Angular component', () => {
    expect(component).toBeTruthy();
  });

  it('should display Web Development Project', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Web Development Project');
  });

  it('should display Angular version 1.1', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Version 1.1');
  });
});
