import React from "react";
import { isDef } from "../validate";

export const getSizeStyle = (size?: number | string): React.CSSProperties | undefined => {
  if (isDef(size)) {
    return {
      width: size,
      height: size
    }
  }
  return undefined
}
