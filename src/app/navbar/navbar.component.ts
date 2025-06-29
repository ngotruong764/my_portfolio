import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  authorName = 'Ngo Quang Truong';
  constructor() { }

  onHireMe() {
    // Handle hire me button click
    console.log('Hire me clicked');
    // You can add navigation logic here
  }

  onNavItemClick(item: string) {
    // Handle navigation item clicks
    console.log(`${item} clicked`);
    // Add your routing logic here
  }
}
