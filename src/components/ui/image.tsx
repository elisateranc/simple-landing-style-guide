
import * as React from "react"
import { cn } from "@/lib/utils"

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: number;
  height?: number;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, width, height, ...props }, ref) => {
    const style = {
      ...props.style,
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {})
    };

    return (
      <img
        className={cn(className)}
        ref={ref}
        style={style}
        {...props}
      />
    )
  }
)
Image.displayName = "Image"

export default Image;
