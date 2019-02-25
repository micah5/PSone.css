import { storiesOf } from '@storybook/html';
import {
  withKnobs, radios,
} from '@storybook/addon-knobs';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.add('button', () => {
  const extraClass = radios('class', {
    default: '',
    'primary': 'primary',
    'success': 'success',
    'warning': 'warning',
    'error': 'error'
  }, '');

  return `<button type="button" class="btn ${extraClass}">Button</button>`;
});
