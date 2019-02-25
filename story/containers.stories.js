import { storiesOf } from '@storybook/html';
import {
  withKnobs, radios,
} from '@storybook/addon-knobs';

const stories = storiesOf('Containers', module);
stories.addDecorator(withKnobs);

stories.add('container', () => {
  const classes = radios('class', {
    default: '',
    'light': 'light',
    'dark': 'dark'
  }, '');

  return `<div class="containers">
      <div class="container ${classes}">
        <label class="title">Container</label>
        <p>Kick! Punch! It's all in the mind.</p>
      </div>`;
});
