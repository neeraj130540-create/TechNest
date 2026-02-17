import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  features = [
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Live Classes',
      description: 'Interactive live sessions with real-time Q&A, code reviews, and collaborative learning.',
      highlight: '3x Weekly'
    },
    {
      icon: 'fas fa-project-diagram',
      title: 'Real Projects',
      description: 'Build portfolio-ready projects with industry-standard tools and best practices.',
      highlight: '10+ Projects'
    },
    {
      icon: 'fas fa-user-tie',
      title: 'Career Support',
      description: 'Resume building, mock interviews, and direct connections with hiring partners.',
      highlight: '95% Placed'
    },
    {
      icon: 'fas fa-infinity',
      title: 'Lifetime Access',
      description: 'Access course materials, updates, and community resources forever after enrollment.',
      highlight: 'Forever'
    },
    {
      icon: 'fas fa-code-branch',
      title: 'Code Reviews',
      description: 'Get personalized feedback on your code from experienced senior developers.',
      highlight: 'Weekly'
    },
    {
      icon: 'fas fa-people-group',
      title: 'Community',
      description: 'Join a thriving community of learners, mentors, and tech professionals.',
      highlight: '2K+ Members'
    }
  ];
}
