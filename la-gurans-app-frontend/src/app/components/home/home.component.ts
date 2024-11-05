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
  members: Member[] = Array.from({ length: 4 }, (_, i) => ({
    name: `Member ${i + 1}`,
    position: `Position ${i + 1}`,
  }));
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

interface Member {
  name: string;
  position: string;
}
