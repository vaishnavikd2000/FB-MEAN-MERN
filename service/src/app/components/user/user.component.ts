import { Component } from '@angular/core';
import { UserDataService } from '../../service/user-data.service';
import { CommonModule } from '@angular/common';
import { DynamicDataService } from '../../service/dynamic-data.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-user',
  // standalone: true, // Optional: Use if this component is standalone
  imports: [CommonModule, HttpClientModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'] // Corrected to styleUrls
})
export class UserComponent {
  users: any[] = []; // Store user data
  apiData: any[] = []; // Store data fetched from API
 

  constructor(
    private userService: UserDataService,
    private apiDataService: DynamicDataService, // Corrected to private
   
  ) { }

  // Fetch user data from UserDataService
  fetchUsers(): void {
    this.users = this.userService.getUsers();
    console.log('Fetched Users:', this.users);
  }

  // Fetch API data from DynamicDataService
  fetchApiData(): void {
    this.apiDataService.fetchApiData().subscribe((res) => {
      this.apiData = res;
      console.log('Fetched API Data:', this.apiData);

    })
  }


  
}
