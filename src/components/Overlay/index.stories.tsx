import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react';
import Overlay from '.'
import { OverlayProps } from './types';

export default {
  title: 'Overlay',
  component: Overlay,
} as Meta;

const Template: Story<OverlayProps> = (args) => {
  const [show, setShow] = useState(false)
  return (
    <>
    <Overlay {...args} show={show}>
    </Overlay>
      <div style={{ height: 1000, backgroundColor: "#fff", width: "80%" }}>
      <div onClick={() => setShow(true)}>Button</div>
      </div>
    </>
  )
};

export const Basic = Template.bind({})
Basic.args = {
  // children: 'Loading',
  // show: true
  zIndex: 100,
  lockScroll: true
}
