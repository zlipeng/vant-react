import React, { CSSProperties } from 'react'
import classNames from 'classnames'
import { createNamespace } from '@/utils/create'
import { ButtonProps } from './types'
import { BORDER_SURROUND } from '@/utils/constant'
import Icon from '../Icon'
import Loading from '../Loading'
import './index.less'

const [name, bem] = createNamespace('button')

export default function Button(props: ButtonProps) {
  const {
    type = 'default',
    size = 'normal',
    iconPosition = 'left',
    plain,
    block,
    round,
    square,
    loading,
    disabled,
    hairline,
    tag,
    text,
    color,
    loadingText,
    loadingSize,
    loadingType,
    icon,
    iconPrefix
  } = props;

  const Tag: any = tag || 'button'

  const getStyle = () => {
    if (color) {
      const style: CSSProperties = {
        color: plain ? color : 'white',
      };

      if (!plain) {
        // Use background instead of backgroundColor to make linear-gradient work
        style.background = color;
      }

      // hide border when color is linear-gradient
      if (color.includes('gradient')) {
        style.border = 0;
      } else {
        style.borderColor = color;
      }

      return style;
    }
    return {}
  };

  const renderText = () => {
    let btnText
    if (loading) {
      btnText = loadingText
    } else {
      btnText = text
    }
    if (btnText) {
      return <span className={classNames(bem('text'))}>{btnText}</span>
    }
    return null
  }

  const renderIcon = () => {
    if (loading) {
      return <Loading className={classNames(bem('loading'))} color='currentColor' type={loadingType} size={loadingSize} />
    }
    if (icon) {
      return (
        <Icon name={icon} className={classNames(bem('icon'))} classPrefix={iconPrefix} />
      )
    }
    return null
  }

  const classes = classNames(bem([type, size, { plain, block, round, square, loading, disabled, hairline }]), { [BORDER_SURROUND]: hairline });
  return (
    <Tag className={classes} style={getStyle()}>
      <div className={classNames(bem('content'))}>
        {iconPosition === 'left' && renderIcon()}
        {renderText()}
        {iconPosition === 'right' && renderIcon()}
      </div>
    </Tag>
  )
}
