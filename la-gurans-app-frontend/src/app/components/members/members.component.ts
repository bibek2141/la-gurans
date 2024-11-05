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
  members: Member[] = Array.from({ length: 20 }, (_, i) => ({
    name: `Member ${i + 1}`,
    position: `Position ${i + 1}`,
    email: `member${i + 1}@example.com`,
  }));
}

interface Member {
  name: string;
  position: string;
}
