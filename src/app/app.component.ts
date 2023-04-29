import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule // Add this line to import HttpClientTestingModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // ... other tests
});


@Component({
  selector: 'app-root',
  template: `
    <h1>{{ message }}</h1>
  `,
})
export class AppComponent {
  title = 'helloworld-app'; 
  message: string;

  constructor(private http: HttpClient) {
    this.http.get<string>('http://localhost:3000/').subscribe((data) => {
      this.message = data;
    });
  }
}
