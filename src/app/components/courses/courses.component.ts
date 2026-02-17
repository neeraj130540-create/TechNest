import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Course {
  icon: string;
  title: string;
  description: string;
  duration: string;
  lessons: number;
  level: string;
  color: string;
  bgColor: string;
  topics: string[];
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses: Course[] = [
    {
      icon: 'fab fa-angular',
      title: 'Angular',
      description: 'Build enterprise-grade single-page applications with Angular framework, TypeScript, and RxJS.',
      duration: '12 Weeks',
      lessons: 48,
      level: 'Intermediate',
      color: '#dd0031',
      bgColor: 'rgba(221, 0, 49, 0.1)',
      topics: ['Components & Modules', 'Services & DI', 'Routing & Guards', 'RxJS & State Management']
    },
    {
      icon: 'fab fa-html5',
      title: 'HTML5',
      description: 'Master semantic HTML5, accessibility best practices, and modern markup techniques.',
      duration: '4 Weeks',
      lessons: 20,
      level: 'Beginner',
      color: '#e34f26',
      bgColor: 'rgba(227, 79, 38, 0.1)',
      topics: ['Semantic Elements', 'Forms & Validation', 'Multimedia & Canvas', 'Accessibility (A11y)']
    },
    {
      icon: 'fab fa-css3-alt',
      title: 'CSS3',
      description: 'Create stunning responsive designs with CSS3, Flexbox, Grid, and modern animations.',
      duration: '6 Weeks',
      lessons: 30,
      level: 'Beginner',
      color: '#2965f1',
      bgColor: 'rgba(41, 101, 241, 0.1)',
      topics: ['Flexbox & Grid', 'Animations & Transitions', 'Responsive Design', 'SCSS & Preprocessors']
    },
    {
      icon: 'fab fa-react',
      title: 'React',
      description: 'Build modern user interfaces with React, Hooks, Context API, and the React ecosystem.',
      duration: '10 Weeks',
      lessons: 42,
      level: 'Intermediate',
      color: '#61dafb',
      bgColor: 'rgba(97, 219, 251, 0.1)',
      topics: ['JSX & Components', 'Hooks & State', 'Context & Redux', 'Next.js & SSR']
    },
    {
      icon: 'fab fa-java',
      title: 'Java',
      description: 'Learn Java from fundamentals to advanced OOP, data structures, and Spring Boot.',
      duration: '14 Weeks',
      lessons: 56,
      level: 'Beginner to Advanced',
      color: '#ed8b00',
      bgColor: 'rgba(237, 139, 0, 0.1)',
      topics: ['Core Java & OOP', 'Collections & Streams', 'Spring Boot & REST', 'Microservices & JPA']
    }
  ];
}
