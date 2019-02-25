import { storiesOf } from '@storybook/html';
import {
  withKnobs, select, boolean,
} from '@storybook/addon-knobs';

const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);

stories.add('dance dance revolution', () => {
  const selectedClass = select('class', {
    'ddr1': 'ddr1',
    'ddr2': 'ddr2',
    'ddr3': 'ddr3',
  }, 'ddr1');

  return `<i class="icon ${selectedClass}"></i>`;
})
  .add('controller buttons', () => {
    const selectedClass = select('class', {
      'square': 'square',
      'triangle': 'triangle',
      'circle': 'circle',
      'x': 'x',
      'arrow-left': 'arrow-left',
      'arrow-right': 'arrow-right',
      'arrow-up': 'arrow-up',
      'arrow-down': 'arrow-down',
      'start': 'start',
      'select': 'select',
      'l1': 'l1',
      'r1': 'r1',
      'r2': 'r2',
      'l2': 'l2',
      'l3': 'l3',
      'r3': 'r3',
      'psone': 'psone',
    }, 'square');
    const clickable = boolean('clickable', false) ? 'clickable' : '';
    const selectLabel = boolean('select-label', false) ? 'select-label' : '';
    const startLabel = boolean('start-label', false) ? 'start-label' : '';
    const selectedClasses = [selectedClass, clickable, startLabel, selectLabel]

    return `<i class="icon ${selectedClasses.join(' ')}"></i>`;
  });
