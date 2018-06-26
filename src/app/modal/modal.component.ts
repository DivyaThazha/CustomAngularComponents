import { Component, OnInit, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  
  @ContentChild('modalHeader') header: TemplateRef<any>;
  @ContentChild('modalBody') body: TemplateRef<any>;
  @ContentChild('modalFooter') footer: TemplateRef<any>;

  visible = false;
  constructor() { }

  ngOnInit() {
  }

  open(): void {
    document.body.classList.add('modal-open');
    this.visible = true;
  }

  close(): void {
    document.body.classList.remove('modal-open');
    this.visible = false;
  }

  getModalStatus(){
    return this.visible;
  }

}
