import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = shallow( <
      Card text="text"
      emoji="emoji"
      id={0}
      deleteCardCallback={() => {} }/>);

      // Assert that it looks like the last snapshot
      expect(wrapper).toMatchSnapshot();
    });
  });
