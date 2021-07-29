import { BaseComponentProps } from "../types";

export interface IconProps extends BaseComponentProps {
  name?: string
  dot?: boolean
  badge?: number | string
  color?: string
  size?: number | string
  classPrefix?: string
  tag?: string
}
