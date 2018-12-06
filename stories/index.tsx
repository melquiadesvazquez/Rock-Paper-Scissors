import * as React from 'react';
import Hello from '../src/containers/Hello';

import { storiesOf } from '@storybook/react';

storiesOf("TypeScript and Storybook", module)
  .add('Sample Widget', () => <Hello />);
