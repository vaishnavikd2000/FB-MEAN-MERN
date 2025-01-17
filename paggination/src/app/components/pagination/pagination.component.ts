import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  page = 1;
  next = '';
  Previous = '';
  paginationData = [
    {
      "name": "John Doe",
      "role": "Software Engineer",
      "email": "john.doe@example.com"
    },
    {
      "name": "Jane Smith",
      "role": "Project Manager",
      "email": "jane.smith@example.com"
    },
    {
      "name": "Alice Johnson",
      "role": "UI/UX Designer",
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Brown",
      "role": "Quality Analyst",
      "email": "bob.brown@example.com"
    },
    {
      "name": "Charlie Davis",
      "role": "Data Scientist",
      "email": "charlie.davis@example.com"
    },
    {
      "name": "Diana White",
      "role": "Marketing Specialist",
      "email": "diana.white@example.com"
    },
    {
      "name": "Ethan Miller",
      "role": "DevOps Engineer",
      "email": "ethan.miller@example.com"
    },
    {
      "name": "Fiona Green",
      "role": "Business Analyst",
      "email": "fiona.green@example.com"
    },
    {
      "name": "George Harris",
      "role": "Frontend Developer",
      "email": "george.harris@example.com"
    },
    {
      "name": "Hannah Clark",
      "role": "Backend Developer",
      "email": "hannah.clark@example.com"
    },
    {
      "name": "Isaac Wright",
      "role": "Full Stack Developer",
      "email": "isaac.wright@example.com"
    },
    {
      "name": "Julia Walker",
      "role": "HR Manager",
      "email": "julia.walker@example.com"
    },
    {
      "name": "Kevin Lee",
      "role": "Database Administrator",
      "email": "kevin.lee@example.com"
    },
    {
      "name": "Laura King",
      "role": "Content Writer",
      "email": "laura.king@example.com"
    },
    {
      "name": "Michael Scott",
      "role": "Team Lead",
      "email": "michael.scott@example.com"
    },
    {
      "name": "Nancy Adams",
      "role": "Graphic Designer",
      "email": "nancy.adams@example.com"
    },
    {
      "name": "Oliver Brown",
      "role": "System Architect",
      "email": "oliver.brown@example.com"
    },
    {
      "name": "Penelope Carter",
      "role": "Operations Manager",
      "email": "penelope.carter@example.com"
    },
    {
      "name": "Quinn Daniels",
      "role": "Cloud Engineer",
      "email": "quinn.daniels@example.com"
    },
    {
      "name": "Rachel Evans",
      "role": "SEO Specialist",
      "email": "rachel.evans@example.com"
    }
  ];
}
