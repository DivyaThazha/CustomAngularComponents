import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  @Input() tooltipvalue: string;
  @Input() buttonvalue: string;
  @Input() onside: string;
  @Input() className : string;
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

  }

  onHover() {
    const element: HTMLElement = this.elementRef.nativeElement.children[0].children;
    element[1].classList.add("show");
    element[2].classList.add("show");
  }

  onHoverOut() {
    const element: HTMLElement = this.elementRef.nativeElement.children[0].children;
    element[1].classList.remove("show");
    element[2].classList.remove("show");
  }

}
