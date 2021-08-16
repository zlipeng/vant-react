import React from "react";
import { BaseComponentProps } from "../types";

export interface OverlayProps extends BaseComponentProps {
  show?: boolean
  zIndex?: number
  duration?: number
  customStyle?: React.CSSProperties
  lockScroll?: boolean
}
