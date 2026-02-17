import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  courses = ['Angular', 'HTML5', 'CSS3', 'React', 'Java'];

  onSubmit() {
    this.submitted = true;
    setTimeout(() => this.submitted = false, 3000);
    this.formData = { name: '', email: '', phone: '', course: '', message: '' };
  }
}
