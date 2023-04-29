import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';

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
