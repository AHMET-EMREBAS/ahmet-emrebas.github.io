import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[techbirToggleFullscreen]',
})
export class ToggleFullscreenDirective implements AfterViewInit {
  @Input() techbirToggleFullscreen!: HTMLElement;

  constructor(private readonly elementRef: ElementRef<HTMLButtonElement>) {}

  toggle() {
    const element = this.techbirToggleFullscreen;

    if (!document.fullscreenElement) {
      if (element.requestFullscreen) {
        element.requestFullscreen(); // Standard method
      } else if ((element as any).mozRequestFullScreen) {
        (element as any).mozRequestFullScreen(); // Firefox
      } else if ((element as any).webkitRequestFullscreen) {
        (element as any).webkitRequestFullscreen(); // Chrome, Safari, and Opera
      } else if ((element as any).msRequestFullscreen) {
        (element as any).msRequestFullscreen(); // Internet Explorer
      }
    } else {
      // If already in fullscreen, exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
    }
  }
  ngAfterViewInit(): void {
    this.techbirToggleFullscreen.addEventListener('click', () => {
      this.toggle();
    });
  }
}
