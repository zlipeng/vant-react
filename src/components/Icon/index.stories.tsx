import React from 'react'
import { Story, Meta } from '@storybook/react';
import Icon from '.'
import { IconProps } from './types';

export default {
  title: 'Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Basic = Template.bind({})
Basic.args = {
  name: 'chat-o',
  size: '20px'
}
