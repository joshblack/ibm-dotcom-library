import ButtonGroup from '../ButtonGroup';
import { mount } from 'enzyme';
import React from 'react';

describe('<ButtonGroup />', () => {
  it('renders ButtonGroup as expected', () => {
    const buttons = [
      {
        href: '',
        copy: 'Primary action button',
        renderIcon: 'ArrowDown',
      },
      {
        href: '',
        copy: 'Secondary action button',
        renderIcon: 'ArrowRight',
      },
    ];
    const buttonGroup = mount(<ButtonGroup buttons={buttons} />);
    expect(buttonGroup.find('.bx--buttongroup')).toHaveLength(1);
  });
});
