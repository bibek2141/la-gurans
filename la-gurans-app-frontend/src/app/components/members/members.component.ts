import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css',
})
export class MembersComponent {
  members: Member[] = [
    { name: 'Amit Gurung', position: 'Member' },
    { name: 'Prajwol Shakya', position: 'Member' },
    { name: 'Samarpan Prasai', position: 'Member' },
    { name: 'Ronal Dhungel', position: 'Member' },
    { name: 'Sohan Thapa', position: 'Member' },
    { name: 'Bibek Adhikari', position: 'Member' },
    { name: 'Tashi Ghale', position: 'Member' },
    { name: 'Aayush Bhattarai', position: 'Member' },
    { name: 'Ajay Kc', position: 'Member' },
    { name: 'Nikol Shrestha', position: 'Member' },
    { name: 'Saksham Thapa', position: 'Member' },
    { name: 'Bikesh Shrestha', position: 'Member' },
    { name: 'Shlok Wagle', position: 'Member' },
    { name: 'Shreeyash Dhakal', position: 'Member' },
    { name: 'Raju Aryal', position: 'Member' },
    { name: 'Surendra Gurung', position: 'Member' },
    { name: 'Aryan Pathak', position: 'Member' },
    { name: 'Keshab Neupane', position: 'Member' },
  ];
}

interface Member {
  name: string;
  position: string;
}
