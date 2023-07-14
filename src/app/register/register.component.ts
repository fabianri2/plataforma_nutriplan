import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) { }

  registerUser(): void {
    this.http.post('http://localhost:8080/users', this.user)
      .subscribe(
                  {
        next: () => {
          console.log('Registration successful');
          // Mostrar mensaje de registro exitoso
        },
        error: (error: any) => {
          console.error('Error registering user', error);
          // Mostrar mensaje de error
        },
                  }
      );
  }
}
