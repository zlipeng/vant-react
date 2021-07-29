import React from 'react'
import { IconProps } from './types';
import classNames from 'classnames'
import './index.less'
import { createNamespace } from '@/utils/create'

const [cssname, bem] = createNamespace('icon')

function isImage(name?: string) {
  return name?.includes('/');
}

export default function Icon(props: IconProps) {
  const { tag, dot, name, size, badge, color, classPrefix } = props
  const isImageIcon = isImage(name);

  const Tag: any = tag || 'i'

  const classes = classNames(classPrefix || cssname, isImageIcon ? '' : `${classPrefix || cssname}-${name}`)

  return (
    <Tag className={classes} style={{ color, fontSize: size }}>
      {isImageIcon && <img src={name} className={classNames(bem('image'))} />}
    </Tag>
  )
}
