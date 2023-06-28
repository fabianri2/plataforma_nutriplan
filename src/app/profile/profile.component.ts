import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from './profile.service';
import { Profile } from './profile.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  profileData: Profile = {
    nombre: '',
    direccion: '',
    telefono: '',
    correo: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]]
    });

    this.profileService.getProfile().pipe(
      tap((data: Profile): void => {
        this.profileData = data;
        this.profileForm.patchValue(data);
      })
    ).subscribe(
      () => {},
      (error: any) => {
        console.error('Error al obtener la información del perfil:', error);
      }
    );
  }

  updateProfile(): void {
    if (this.profileForm.valid) {
      const updatedProfileData = this.profileForm.value;
      this.profileService.updateProfile(updatedProfileData).subscribe(
        (response: any) => {
          console.log('Perfil actualizado correctamente:', response);
        },
        (error: any) => {
          console.error('Error al actualizar el perfil:', error);
        }
      );
    }
  }
}
