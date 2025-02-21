import React from "react"

import { tv } from "tailwind-variants"

const containerStyles = tv({
  base: "mx-auto w-full max-w-7xl lg:max-w-screen-xl 2xl:max-w-screen-2xl",
  variants: {
    intent: {
      constrained: "sm:px-0 lg:px-0",
      "padded-content": "px-0 sm:px-0 lg:px-0"
    }
  },
  defaultVariants: {
    intent: "padded-content"
  }
})

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  intent?: "constrained" | "padded-content"
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, intent, ...props }, ref) => (
    <div className={containerStyles({ intent, className })} {...props} ref={ref} />
  )
)

Container.displayName = "Container"

export { Container }
