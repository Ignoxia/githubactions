import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ message }}</h1>
  `,
  imports:[ HttpClientModule ]
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
