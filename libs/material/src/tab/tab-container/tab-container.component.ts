import {
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollDirectionDirective } from '../../scroll-direction/scroll-direction.directive';
import { TabComponent } from '../tab.component';
@Component({
  selector: 'tb-tab-container',
  standalone: true,
  imports: [CommonModule, ScrollDirectionDirective],
  templateUrl: './tab-container.component.html',
  styles: [],

  animations: [],
})
export class TabContainerComponent {
  @ViewChild('container') container?: ElementRef<HTMLDivElement>;

  @ContentChildren(TabComponent) children?: QueryList<Partial<TabComponent>>;

  componentType = TabComponent;

  childValue(child: Partial<TabComponent>): Partial<TabComponent> {
    return { label: child.label, active: child.active };
  }
  activate(child: Partial<TabComponent>) {
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
    this.container?.nativeElement.scrollBy({ left: event.deltaY });
  }

  mousemove(event: MouseEvent) {
    console.log(event);
  }
}
