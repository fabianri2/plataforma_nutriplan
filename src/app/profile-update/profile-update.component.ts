import { Component } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent {
  profile: any = {};

  constructor(private profileService: ProfileService) { }

  updateProfile(): void {
    this.profileService.updateProfile(this.profile)
      .subscribe(
        {
      next: () => {
        console.log('Profile updated successfully');
      },
      error: () => {
        console.error('Error updating profile');
    }
        });
  }
}
