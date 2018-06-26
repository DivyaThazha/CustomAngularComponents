import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  @Input() popoverheading: string;
  @Input() popovervalue: string;
  @Input() buttonvalue: string;
  @Input() onside: string
  @Input() className: string;
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

  }

  onClick() {
    const element: HTMLElement = this.elementRef.nativeElement.children[0].children;
      if (element[1].classList.contains("show")) {
          this.close();
      } else {
          this.open();
      }
  }

  open(){
    const element: HTMLElement = this.elementRef.nativeElement.children[0].children;
    element[1].classList.add("show");
    element[2].classList.add("show");
  }
  close() {
    const element: HTMLElement = this.elementRef.nativeElement.children[0].children;
    element[1].classList.remove("show");
    element[2].classList.remove("show");
  }

}
