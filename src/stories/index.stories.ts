import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { moduleMetadata } from '@storybook/angular';


import { Welcome, Button } from '@storybook/angular/demo';
import { ButtonComponent } from '../app/button/button.component';
import { ModalComponent } from '../app/modal/modal.component';

import { ModalService } from '../app/service/modal/modal.service';
const modal = new ModalService();

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module)
.addDecorator(
  moduleMetadata({
    declarations: [Button],
  })
)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add(
    'with some emoji',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }))
  )
  .add(
    'with some emoji and action',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }))
  );

  storiesOf('Custom Button', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent]

    })
  )
  .add('with value', () => ({
    component: ButtonComponent,
    props: {
      value: 'Default Button'
    }
  }))
  .add('with primary classs', () => ({
    component: ButtonComponent,
    props: {
      value: 'Default Button',
      className :'primary'
    }
  }))
  .add('with action', () => ({
    component: ButtonComponent,
    props: {
      value: 'Button',
      className :'secondary',
      btnClicked: action('')
    }
  }));

  storiesOf('Custom Modal', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ModalComponent],
      providers: [ModalService]
    })
  )
  .add('default', () => ({
    template: `<button (click)="openModal(modal1)">Launch modal</button>
    <app-modal #modal1>
      <ng-template #modalHeader><h2>Hello</h2></ng-template>
      <ng-template #modalBody><p>This is how the modal will look like.</p></ng-template>
      <ng-template #modalFooter></ng-template>
    </app-modal>`,
    props: {
      openModal: event => {
        modal.open(event);
      },
    }
  }))
  .add('with primary class', () => ({
    template: `<button (click)="openModal(modal2)">Launch modal</button>
    <app-modal #modal2>
      <ng-template #modalHeader><h2>Hello</h2></ng-template>
      <ng-template #modalBody><p>This is how the modal will look like.</p></ng-template>
      <ng-template #modalFooter>
        <button type="button" class="btn btn-primary" (click)="closeModal(modal2)" >Save</button>
      </ng-template>
    </app-modal>`,
    props: {
      openModal: event => {
        modal.open(event);
      },
      closeModal: event => {
        modal.close(event);
      },
    },
    styles: [
      `
      .btn {
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }

      .btn-primary {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
      }
    `,
    ],
  }));
