import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Frontend Developer at Google',
      course: 'Angular',
      quote: 'TechNest Academy transformed my career completely. The Angular course gave me the skills and confidence to land my dream job at Google.',
      rating: 5,
      avatar: 'PS'
    },
    {
      name: 'Rahul Mehta',
      role: 'Full Stack Developer at Amazon',
      course: 'React & Java',
      quote: 'The hands-on approach and expert mentors made all the difference. I went from zero coding knowledge to a full-stack developer in 6 months.',
      rating: 5,
      avatar: 'RM'
    },
    {
      name: 'Sneha Patel',
      role: 'UI/UX Developer at Microsoft',
      course: 'HTML & CSS',
      quote: 'The HTML & CSS course was incredibly thorough. I learned responsive design, animations, and modern CSS techniques that I use daily.',
      rating: 5,
      avatar: 'SP'
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
