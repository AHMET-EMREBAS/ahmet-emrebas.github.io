import { Component } from '@angular/core';
import { setStatusBarColor } from '../../../utils';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'Another title';

  ngOnInit() {
    setStatusBarColor('dark', '#97d9e9');
  }
}
