import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ContentChild, TemplateRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  
})

export class DropdownComponent implements OnInit {

  @Output() onOpen = new EventEmitter();
  @Output() onClose = new EventEmitter();
  @Output() onOptionSelected = new EventEmitter();
  @ContentChild('dropdownMenu') dropdownMenu: TemplateRef<any>;
  @ViewChild('dropdownOptions') dropdownOptions : ElementRef;
  constructor(private elementRef : ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.listen(this.dropdownOptions.nativeElement, 'click', (evt) => {
      console.log('Clicking the dropdownItem', evt.target.value);
      this.close();
      this.onOptionSelected.emit(evt.target);
    });
  }

  open() {
    const element: HTMLElement = this.elementRef.nativeElement.children;
    element[0].classList.add("show");
    this.onOpen.emit(undefined);
  }

  close() {
    const element: HTMLElement = this.elementRef.nativeElement.children;
    element[0].classList.remove("show");
    this.onClose.emit(undefined);
  }

  isOpened() {
    const element: HTMLElement = this.elementRef.nativeElement.children;
    return element[0].classList.contains("show");
  }

  toggle() {
    if (this.isOpened()) {
        this.close();
    } else {
        this.open();
    }
  }

}
