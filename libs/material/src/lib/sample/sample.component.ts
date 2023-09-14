import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'techbir-sample',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent {
  @Input() sampleInput = 'sample works';
}
