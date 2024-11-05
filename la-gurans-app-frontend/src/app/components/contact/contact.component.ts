import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NavbarComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private contactService: ContactService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      //console.log(form.form.value);
      this.contactService.sendContactForm(form.value).subscribe(
        (response) => {
          this.successMessage = 'Your message has been sent successfully!';
          this.errorMessage = null;
          form.reset();
        },
        (error) => {
          this.errorMessage =
            'Failed to send your message. Please try again later.';
          this.successMessage = null;
          console.error('Error:', error);
        }
      );
    }
  }
}
