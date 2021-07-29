import React from 'react'
import { Story, Meta } from '@storybook/react';
import Loading from '.'
import { LoadingProps } from './types';

export default {
  title: 'Loading',
  component: Loading,
} as Meta;

const Template: Story<LoadingProps> = (args) => <Loading {...args} />;

export const Basic = Template.bind({})
Basic.args = {
  children: 'Loading'
}
