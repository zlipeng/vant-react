import { BaseComponentProps } from "../types"

export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini'
export interface ButtonProps extends BaseComponentProps {
  type?: ButtonType
  size?: ButtonSize
  text?: string
  color?: string
  icon?: string
  iconPrefix?: string
  iconPosition?: 'left' | 'right'
  tag?: string
  nativeType?: string
  block?: boolean
  square?: boolean
  plain?: boolean
  round?: boolean
  disabled?: boolean
  hairline?: boolean
  loading?: boolean
  loadingText?: string
  loadingType?: 'spinner' | 'circular'
  loadingSize?: string
  url?: string
  replace?: boolean
}
