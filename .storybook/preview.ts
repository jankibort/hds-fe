import type { Preview } from '@storybook/react';
import '../src/app/globals.css';

const VIEWPORTS = {
  mobile: {
    name: 'Mobile',
    styles: {
      height: '568px',
      width: '320px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      height: '800px',
      width: '720px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      height: '1000px',
      width: '1440px',
    },
  },
};

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: VIEWPORTS,
    },
  },
  tags: ['autodocs'],
};

export default preview;
