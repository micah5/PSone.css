import { storiesOf } from '@storybook/html';
import {
  withKnobs, number, radios, boolean,
} from '@storybook/addon-knobs';

const stories = storiesOf('Progress', module);
stories.addDecorator(withKnobs);

stories.add('progress', () => {
  const percentage = number('percentage', 30, {
    range: true,
    min: 0,
    max: 100,
    step: 1,
  });
  const classes = radios('class', {
    default: '',
    'primary': 'primary',
    'success': 'success',
    'warning': 'warning',
    'error': 'error',
  }, '');
  const indeterminate = boolean('indeterminate', false) ? 'indeterminate' : '';
  const selectedClasses = [classes, indeterminate];
  return `<div class="progress ${selectedClasses.join(' ')}">
    <div class="bar" style="width: ${percentage}%"></div>
    <div class="subtitle">Default</div>
  </div>`
});
