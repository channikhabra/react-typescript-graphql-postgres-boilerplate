import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import FlashMessage, { FlashMessageProps } from './index';

const Template: Story<FlashMessageProps> = (args) => <FlashMessage {...args} />;

export const Success = Template.bind({});
Success.args = {
  id: '1',
  body: '',
  title: 'Flash message title',
  type: 'success',
};

export const Info = Template.bind({});
Info.args = {
  ...Success.args,
  type: 'info',
};

export const Error = Template.bind({});
Error.args = {
  ...Success.args,
  type: 'error',
};

export const WithBody = Template.bind({});
WithBody.args = {
  ...Success.args,
  body: 'I have a body!',
};

export default {
  argTypes: {
    type: { control: { type: 'select', options: ['info', 'success', 'error'] } },
  },
  component: FlashMessage,
  title: 'FlashMessage',
} as Meta;
