import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Replace with your deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxVT75XmNwXJR2xkIJQAi9G-aY37pszEsT6PDvpt2CTyt15gVyuFI4gDSIYXSOcUR2l/exec';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  };

  submitted = false;
  submitting = false;
  error = false;

  courses = ['Angular', 'HTML5', 'CSS3', 'React', 'Java'];

  async onSubmit() {
    this.submitting = true;
    this.error = false;

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(this.formData)
      });

      this.submitting = false;
      this.submitted = true;
      this.formData = { name: '', email: '', phone: '', course: '', message: '' };
      setTimeout(() => this.submitted = false, 5000);
    } catch {
      this.submitting = false;
      this.error = true;
    }
  }
}
