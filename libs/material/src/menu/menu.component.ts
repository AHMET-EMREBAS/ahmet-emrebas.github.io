import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ButtonEvent } from '../button';
import { Position } from '../api';

@Component({
  selector: 'tb-menu',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './menu.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent extends ButtonComponent implements AfterViewInit {
  /** @ignore */
  readonly componentType = MenuComponent;

  @Input()
  @Output()
  override clickEvent: EventEmitter<ButtonEvent> = new EventEmitter<ButtonEvent>();

  @ContentChildren(MenuComponent) childrenViaContent?: QueryList<MenuComponent>;

  @Input() childrenViaInput?: Partial<MenuComponent>[];

  children?: Partial<MenuComponent>[];

  @Input() position: Position = 'none';

  @Input() showAs: 'row' | 'column' = 'column';

  constructor(private readonly detector: ChangeDetectorRef) {
    super();
  }

  /** @ignore */
  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    if (!this.children)
      this.children =
        this.childrenViaInput || this.childrenViaContent?.toArray();
    this.detector.detectChanges();
  }

  /** @ignore */
  childValue(child: Partial<MenuComponent>) {
    const {
      buttonType: type,
      variant,
      color,
      size,
      children,
      label,
      position,
      showAs,
      icon,
      tooltip,
      tooltipPosition,
    } = child;

    return {
      type: type || this.buttonType,
      variant: variant || this.variant,
      color: color || this.color,
      size: size || this.size,
      childrenViaInput: children,
      label,
      tooltip: tooltip || this.tooltip,
      tooltipPosition: tooltipPosition || this.tooltipPosition,
      position: position || this.position,
      showAs: showAs || this.showAs,
      icon,
      clickEvent: this.clickEvent,
    };
  }
}
