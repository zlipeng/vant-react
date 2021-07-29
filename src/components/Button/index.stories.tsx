import React from 'react'
import { Story, Meta } from '@storybook/react';
import Button from '.'

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const PlainButton = () => (
  <Button></Button>
)
