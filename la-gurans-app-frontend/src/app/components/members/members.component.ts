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
    { name: 'Raju Aryal', position: 'Member' },
    { name: 'Nabin Rimal', position: 'Member' },
    { name: 'Bikesh KC', position: 'Member' },
    { name: 'Manish Khadka', position: 'Member' },
    { name: 'Suman Ghale', position: 'Member' },
    { name: 'Tilak Purja', position: 'Member' },
    { name: 'Pardip Niraula', position: 'Member' },
    { name: 'Asish Pradhan', position: 'Member' },
    { name: 'Rojil Niraula', position: 'Member' },
    { name: 'Ronal Dhungel', position: 'Member' },
    { name: 'Shlok Wagle', position: 'Member' },
    { name: 'Nikol Shrestha', position: 'Member' },
    { name: 'Sagar Khadka', position: 'Member' },
    { name: 'Sandesh Parajuli', position: 'Member' },
    { name: 'Saksham Thapa', position: 'Member' },
    { name: 'Sohan khadka', position: 'Member' },
    { name: 'Bikesh Shrestha', position: 'Member' },
    { name: 'Kushal KC', position: 'Member' },
    { name: 'Sushant Singh', position: 'Member' },
    { name: 'Prabin Tuladhar', position: 'Member' },
    { name: 'Sujit Gurung', position: 'Member' },
    { name: 'Rohan Pandey', position: 'Member' },
    { name: 'Shreeyash Dhakal', position: 'Member' },
    { name: 'Aakash Bhandari', position: 'Member' },
    { name: 'Mahesh Neupane', position: 'Member' },
    { name: 'Kumar Kafle', position: 'Member' },
    { name: 'Keshab Neupane', position: 'Member' },
  ];
}

interface Member {
  name: string;
  position: string;
}
