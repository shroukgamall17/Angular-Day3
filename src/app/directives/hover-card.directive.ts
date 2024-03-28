
import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverCard]',
  standalone: true
})
export class HoverCardDirective implements OnInit{

  @Input() bgColor: string= 'red' ;

  

  constructor(private el: ElementRef) {
    el.nativeElement.style.boxShadow= "0 14px 18px 0 rgba(0,0,0,0.1)";
  }

  @HostListener('mouseover') onMouseEnter() {
    this.el.nativeElement.style.transition = 'box-shadow 0.3s';
   this.el.nativeElement.style.boxShadow= "0 18px 16px  0 rgba(0,0,0,0.7)";
  }

  @HostListener('mouseout') onMouseLeave() {
    this.el.nativeElement.style.boxShadow= "0 8px 6px  0 rgba(0,0,0,0.3)";
  }

  ngOnInit() {
    this.el.nativeElement.style.borderRadius = '30px';
    this.el.nativeElement.style.marginTop = '30px';
    if (this.bgColor) {
      this.el.nativeElement.style.backgroundColor = this.bgColor;
    }
  }


}


