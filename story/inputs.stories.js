import { storiesOf } from '@storybook/html';
import {
  withKnobs, boolean,
} from '@storybook/addon-knobs';

const stories = storiesOf('Inputs', module);
stories.addDecorator(withKnobs);

stories.add('radio', () => `<div class="radio">
  <label>
    <input type="radio" name="test" value="small" checked>
    <span class="option">Yes
      <span class="click"></span>
    </span>
  </label>
  <label>
    <input type="radio" name="test" value="big">
    <span class="option">No
      <span class="click"></span>
    </span>
  </label>
</div>`)
  .add('text', () => {
    const placeholder = boolean('placeholder', false) ? 'placeholder' : '';

    return `<div class="field ${placeholder ? 'is-inline' : ''}">
      <label>${placeholder ? 'With placeholder' : 'Default'}</label>
      <input type="text" class="input" ${placeholder ? 'placeholder="Jill Valentine"' : ''}>
    </div>`
  });
