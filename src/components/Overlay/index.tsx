import React, { useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { createNamespace } from '@/utils/create'
import { OverlayProps } from './types'
import './index.less'

const [name] = createNamespace('overlay')

export default function Overlay(props: OverlayProps) {
  const { show, duration = 100, children, zIndex = 1, customStyle, lockScroll } = props

  useEffect(() => {
    if (lockScroll) {
      document.addEventListener('touchmove', preventTouchMove, { passive: false })
    } else {
      document.removeEventListener('touchmove', preventTouchMove)
    }
    return () => {
      if (lockScroll) {
        document.removeEventListener('touchmove', preventTouchMove)
      }
    }
  }, [lockScroll])

  const overlayStyle = {
    ...(zIndex !== 1 ? { zIndex } : {}),
    ...(!show ? { display: 'none' } : {}),
    ...customStyle
  }

  const preventTouchMove = (e: TouchEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <CSSTransition in={show} classNames={name} timeout={duration}>
      <div className={name} style={overlayStyle}>{children}</div>
    </CSSTransition>
  )
}
