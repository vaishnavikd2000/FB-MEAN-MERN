import { Component } from '@angular/core';
import { UserServerService } from '../../service/user-server.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crud-component.component.html',
  styleUrls: ['./crud-component.component.css'],
})
export class CrudComponentComponent {
  users: any[] = []; // To hold the list of users fetched from the server
  currentUser: { id?: any, name: string, email: string, role: string } = {
    name: '', // First Name
    email: '', // Email
    role: '',  // Role
  };

  constructor(private serverData: UserServerService) { }

  saveData() {
    if (this.currentUser.id) {
      this.serverData.updateUserData(this.currentUser.id, this.currentUser).subscribe((res) => {
        this.currentUser = res;
        this.resetForm(); // Reset the form after updating user data
        console.log('User data updated:', this.currentUser);
      });
    } else {
      this.serverData.insertedData(this.currentUser).subscribe((res) => {
        console.log('Saving user data:', this.currentUser);
        this.fetchUserData(); // Fetch updated user data list
        this.resetForm(); // Reset the form after inserting new user data
      });
    }
  }
  
  // fetchUserData() {
  //   console.log('Fetching user data...');
  //   this.serverData.getData().subscribe(
  //     (data) => {
  //       this.users = data;
  //       console.log('Fetched users From Server:', this.users);
  //     },
  //     (error) => {
  //       console.error('Error fetching user data:', error);
  //     }
  //   );
  // }
  
  fetchUserData() {
    this.serverData.getData().subscribe((data) => {
      this.users = data;
      console.log('Fetched users From Server:', this.users);

    });
  }

  // resetForm() {
  //   this.currentUser = this.getDefaultUser();
  //   console.log('Form has been reset:', this.currentUser);
  // }
  
  // getDefaultUser() {
  //   return {
  //     name: '',
  //     role: '',
  //     email: ''
  //   };
  // }
  
  resetForm() {
    this.currentUser = {
      name: '',
      role: '',
      email: ''
    }
    console.log('Form has been reset:', this.currentUser);
  }

  // deleteUser(id: string) {
  //   if (confirm('Are you sure you want to delete this user?')) {
  //     console.log(`Deleting user with ID: ${id}`);
  //     this.serverData.deleteUserData(id).subscribe(
  //       (res) => {
  //         console.log(`User with ID ${id} deleted successfully.`);
  //         this.fetchUserData(); // Refresh the user list
  //       },
  //       (error) => {
  //         console.error(`Error deleting user with ID ${id}:`, error);
  //       }
  //     );
  //   } else {
  //     console.log('User deletion cancelled.');
  //   }
  // }
  

  deleteUser(id: string) {
    this.serverData.deleteUserData(id).subscribe((res) => {
      this.fetchUserData();
    })
  }
  
  // editUser(userdata: any) {
  //   console.log('Editing user:', userdata);
  //   this.currentUser = { 
  //     ...userdata, 
  //     additionalField: '' // Initialize additional fields if required
  //   };
  // }
  

  editUser(userdata: any) {
    this.currentUser = userdata
    // this.fetchUserData();

  }

  // ngOnInit() {
  //   console.log('Component initialized, fetching user data...');
  //   this.fetchUserData();
  // }
  
  ngOnInit() {
    this.fetchUserData();
  }
}
