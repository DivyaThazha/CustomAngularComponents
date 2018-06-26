import { storiesOf } from '@storybook/angular';
import { Welcome, Button } from '@storybook/angular/demo';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { ButtonComponent } from '../app/button/button.component';
import '!style-loader!css-loader!./styles.css';

storiesOf('Welcome', module).add('to Storybook', () => ({
  template: `<storybook-welcome-component (showApp)="showApp()"></storybook-welcome-component>`,
  props: {
    showApp: linkTo('Button'),
  },
  moduleMetadata: {
    declarations: [Welcome],
  },
}));

storiesOf('Button', module)
  .addDecorator(
    moduleMetadata({
      declarations: [Button],
    })
  )
  .add('with text', () => ({
    template: `<storybook-button-component [text]="text" (onClick)="onClick($event)"></storybook-button-component>`,
    props: {
      text: 'Hello Button',
      onClick: event => {
        console.log('some bindings work');
        console.log(event);
      },
    },
  }))
  .add('with some emoji', () => ({
    template: `<storybook-button-component [text]="text" (onClick)="onClick($event)"></storybook-button-component>`,
    props: {
      text: '😀 😎 👍 💯',
      onClick: () => {},
    },
  }));


  storiesOf('Custom Button', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent],
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