import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ModalService } from '../service/modal/modal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit {

  @ViewChild(ModalComponent) modal; //this makes sure to observe the value of modal
  modalStatus: boolean;
  TextReceived: string;
  customText: string;
  dropdownOption: string;
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.modalStatus = this.modal.visible;
  }


  /**
   * 
   * @param  event
   * Method invoked on every click of the custom button to enable or disable it
   */
  disabled($event) {
    let classList = $event.target.classList;
    if (!classList.contains("disabled")) {
      alert("Im not disabled.");
    }

    if (classList.contains("disabled")) {
      classList.remove("disabled");
    }
    else
      classList.add("disabled");
  }

  /**
   * 
   * @param modal : Pass the modal Id to this function to open/close a modal
   * This function call a modal service to open/close a modal
   */
  openModal(modal) {
    this.modalService.open(modal);
  }

  closeModal(modal) {
    this.modalService.close(modal);
  }

  getModalStatus() {
    this.modalStatus = this.modal.visible;
    alert("State of modal: " + this.modalStatus);
  }

  receiveMessage($event) {
    this.customText = $event;
    this.TextReceived = this.customText;
  }

  receiveOptionValue($event) {
    console.log($event);
    this.dropdownOption = $event.value;
  }


}
