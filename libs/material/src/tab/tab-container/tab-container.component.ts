import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewChild,
} from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { TabComponent } from '../tab.component';
import { BehaviorSubject, debounceTime } from 'rxjs';
@Component({
  selector: 'tb-tab-container',
  standalone: true,
  imports: [CommonModule, TabComponent],
  templateUrl: './tab-container.component.html',
  styles: [],
})
export class TabContainerComponent {
  @ViewChild('container') container?: ElementRef<HTMLDivElement>;

  @ContentChildren(TabComponent) children?: QueryList<Partial<TabComponent>>;

  componentType = TabComponent;

  childValue(child: Partial<TabComponent>): Partial<TabComponent> {
    return { label: child.label, active: child.active };
  }
  activate(child: Partial<TabComponent>) {
    console.log(child);
    const updated = this.children?.toArray();
    updated?.forEach((e) => (e.active = false));
    if (updated) {
      const found = updated.find((e) => e.label === child.label);
      if (found) {
        found.active = true;

        this.children?.reset([...updated]);
        this.children?.setDirty();
      }
    }
  }

  scroll(event: WheelEvent) {
    event.preventDefault();
    this.container?.nativeElement.scrollBy({
      behavior: 'smooth',
      left: event.deltaY,
    });
  }

  mousemove(event: MouseEvent) {
    console.log(event);
  }
}