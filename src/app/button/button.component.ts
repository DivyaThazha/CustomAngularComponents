import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  customText : string = "";
  @Input() className: string;
  @Input() type: string;
  @Input() value: string;
  @Input() disabled: boolean = false;

  @Output() messageEvent = new EventEmitter<string>();

  getState(){
    return this.disabled;
  }

  sendMessage() {
    this.messageEvent.emit(this.customText)
  }

  constructor() { }

  ngOnInit() {
  }



}
