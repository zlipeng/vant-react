import React from 'react'
import { Story, Meta } from '@storybook/react';
import Button from '.'
import { ButtonProps } from './types';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const PlainButton = Template.bind({})
PlainButton.args = {
  plain: true,
  text: 'Button',
  loadingText: 'Loading...',
  loading: true
}
