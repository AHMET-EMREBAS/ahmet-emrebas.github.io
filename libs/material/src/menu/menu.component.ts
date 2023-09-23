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

  @Input() childrenViaInput?: QueryList<MenuComponent>;

  children?: QueryList<MenuComponent>;

  @Input() position: Position = 'none';

  @Input() showAs: 'row' | 'column' = 'column';

  constructor(private readonly detector: ChangeDetectorRef) {
    super();
  }

  /** @ignore */
  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.children = this.childrenViaInput || this.childrenViaContent;
    this.detector.detectChanges();
  }

  /** @ignore */
  childValue(child: MenuComponent) {
    const { type, variant, color, size, children, label, position, showAs } =
      child;

    return {
      type,
      variant,
      color,
      size,
      childrenViaInput: children,
      label,
      position,
      showAs,
      clickEvent: this.clickEvent,
    };
  }

  override emitClickEvent(): void {
    this.clickEvent.emit({ type: 'click', payload: this.label });
  }
}
