import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ae-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  skills: MenuItem[] = [
    {
      label: 'Frontend',
      items: [
        { label: 'Angular' },
        { label: 'React' },
        { label: 'PrimeNG' },
        { label: 'Angular Material' },
        { label: 'NgRx' },
        { label: 'RxJS' },
        { label: 'Electron' },
        { label: 'NativeScript' },
        { label: 'HTML' },
        { label: 'CSS' },
      ],
    },
    {
      label: 'Backend',
      items: [
        { label: 'NX Nrwl' },
        { label: 'NodeJS' },
        { label: 'Express' },
        { label: 'NestJS' },
        { label: 'Rest API' },
        { label: 'Auth' },
      ],
    },
  ];

  others: MenuItem[] = [
    {
      label: 'Programming',
      items: [
        { label: 'JavaScript' },
        { label: 'TypeScript' },
        { label: 'Java' },
        { label: 'Python' },
        { label: 'Rust' },
      ],
    },
    {
      label: 'Database',
      items: [
        { label: 'SQL' },
        { label: 'ORMs' },
        { label: 'Modeling' },
        { label: 'GraphQL' },
      ],
    },
    {
      label: 'Concepts',

      items: [
        { label: 'Project Management' },
        { label: 'OpenAPI Standards' },
        { label: 'Localization' },
        { label: 'Micro Service' },
        { label: 'Quality Assurance' },
        { label: 'TDD & BDD' },
        { label: 'CI/CD' },
        { label: 'GIT' },
      ],
    },
  ];
}
