import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  open(modal){
    modal.open();
  }

  close(modal){
    modal.close();
  }
  
}
