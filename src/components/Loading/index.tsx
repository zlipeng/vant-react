import React, { useMemo } from 'react'
import classNames from 'classnames'
import { LoadingProps } from './types'
import { createNamespace } from '@/utils/create'
import './index.less'
import { getSizeStyle } from '@/utils/format/unit'

const [name, bem] = createNamespace('loading')

const SpinIcon: JSX.Element[] = Array(12)
  .fill(null)
  .map((_, index) => <i className={classNames(bem('line', String(index + 1)))} />);

const CircularIcon = (
  <svg className={classNames(bem('circular'))} viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20" fill="none" />
  </svg>
);

export default function Loading(props: LoadingProps) {
  const { children, color, type = 'circular', size, textSize = '14px', textColor, vertical = false, style, className } = props

  const loadingStyle = useMemo(() => {
    return {
      color,
      ...getSizeStyle(size)
    }
  }, [color, size])

  const renderText = () => {
    if (children) {
      return (
        <span className={classNames(bem('text'))} style={{ fontSize: textSize, color: textColor }}>
          {children}
        </span>
      )
    }
    return null
  }

  return (
    <div className={classNames(bem([type, { vertical }]), className)} style={style}>
      <span className={classNames(bem('spinner', type))} style={loadingStyle}>
        {type === 'spinner' ? SpinIcon : CircularIcon}
      </span>
      {renderText()}
    </div>
  )
}
