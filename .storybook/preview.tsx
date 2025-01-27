import React from 'react';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story) => {
      // 👇 Make it configurable by reading the theme value from parameters
      return <Story />;
    },
  ],
};

export default preview;
