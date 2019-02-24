import { storiesOf } from '@storybook/html';

const stories = storiesOf('Inputs', module);

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
</div>`);
