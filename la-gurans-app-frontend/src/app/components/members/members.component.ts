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
    { name: 'Sohan Thapa', position: 'Member' },
    { name: 'Bibek Adhikari', position: 'Member' },
    { name: 'Aayush Bhattarai', position: 'Member' },
    { name: 'Ajay Kc', position: 'Member' },
    { name: 'Sagar Leembu', position: 'Member' },
    { name: 'Saurav Leembu', position: 'Member' },
    { name: 'Kritiswa Aryal', position: 'Member' },
    { name: 'Surendra Gurung', position: 'Member' },
  ];
}

interface Member {
  name: string;
  position: string;
}
