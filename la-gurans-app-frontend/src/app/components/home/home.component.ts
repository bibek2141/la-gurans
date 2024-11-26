import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  members: Member[] = [
    { name: 'Amit Gurung', position: 'Member' },
    { name: 'Prajwol Shakya', position: 'Member' },
    { name: 'Samarpan Prasai', position: 'Member' },
    { name: 'Sohan Thapa', position: 'Member' },
  ];
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

interface Member {
  name: string;
  position: string;
}
