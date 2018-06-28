import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { AccordionPanelComponent } from '../accordion-panel/accordion-panel.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements AfterContentInit {

  @ContentChildren(AccordionPanelComponent) panels: QueryList<AccordionPanelComponent>;
  constructor() { }

  ngAfterContentInit() {
    console.log(this.panels);
    this.panels.toArray()[0].active = true;
   
    this.panels.toArray().forEach((p) => {
      // subscribe panel toggle event
      p.toggle.subscribe(() => {
        this.openPanel(p);
      });
    });
  }

  openPanel(panel: AccordionPanelComponent) {
    // close all panels
    this.panels.toArray().forEach(p => p.active = false);
    // open the selected panel
    panel.active = true;
    console.log("OnCLick: "+this.panels);
  }

}
