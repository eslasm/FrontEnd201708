import { AppComponent } from './app.component';
import { FormsModule } from'@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ AppComponent ]
    })
    .compileComponents().then(
      
    );
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => {
    expect(comp).toBeDefined();
  });

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/angular/i,
      '<h1> should say something about "Angular"');
  });

  it('Sätesta korrektne alapealkiri!', () =>{
    fixture.detectChanges();
    const h2 = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(h2.innerText).toMatch('Alapealkiri');
  });
});
