import React from 'react'
import './index.less'
import { createNamespace } from '@/utils/create'

const [name, bem] = createNamespace('button')

interface ButtonProps {}

export default function Button(props: ButtonProps) {
  return (
    <button className={name}>Button</button>
  )
}
