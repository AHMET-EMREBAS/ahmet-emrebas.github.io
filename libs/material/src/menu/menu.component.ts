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

  /**  */
  @ContentChildren(MenuComponent) childrenViaContent?: QueryList<MenuComponent>;

  /** For testing only */
  @Input() childrenViaInput?: Partial<MenuComponent>[];
  
  /** To which direction the menu will open */
  @Input() position: Position = 'none';

  /** Show menu items as */
  @Input() showAs: 'row' | 'column' = 'column';

  children?: Partial<MenuComponent>[];

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
      buttonType,
      type,
      variant,
      color,
      size,
      children,
      label,
      position,
      showAs,
      icon,
    } = child;

    return {
      type: type || this.type,
      buttonType: buttonType || this.buttonType,
      variant: variant || this.variant,
      color: color || this.color,
      size: size || this.size,
      childrenViaInput: children,
      label,
      position: position || this.position,
      showAs: showAs || this.showAs,
      icon,
      clickEvent: this.clickEvent,
    };
  }
}
