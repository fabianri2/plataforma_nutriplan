import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  profileData: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProfileData();
  }

  getProfileData() {
    // Lógica para obtener los datos del perfil desde el backend
    this.http.get('/api/profile').subscribe((data) => {
      this.profileData = data;
    });
  }

  updateProfile() {
    // Lógica para enviar los datos del perfil al backend para su actualización
    this.http.put('/api/profile', this.profileData).subscribe((response) => {
      console.log(response);
    });
  }
}
