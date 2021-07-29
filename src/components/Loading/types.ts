import { BaseComponentProps } from "../types";

export type LoadingType = 'spinner' | 'circular'

export interface LoadingProps extends BaseComponentProps {
  color?: string;
  type?: LoadingType
  size?: string | number
  textSize?: string | number
  textColor?: string
  vertical?: boolean
}
