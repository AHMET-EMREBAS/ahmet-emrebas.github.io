import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../tab.component';

@Component({
  selector: 'tb-tab-container',
  standalone: true,
  imports: [CommonModule, TabComponent],
  templateUrl: './tab-container.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabContainerComponent {
  @ContentChildren(TabComponent) children?: QueryList<Partial<TabComponent>>;

  componentType = TabComponent;

  constructor(private readonly detector: ChangeDetectorRef) {}
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
        this.detector.detectChanges();
      }
    }
  }
}
