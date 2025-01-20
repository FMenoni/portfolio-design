"use client"

import * as React from "react"

import { Separator as SeparatorPrimitive, type SeparatorProps } from "react-aria-components"
import { tv } from "tailwind-variants"

const separatorStyles = tv({
  base: "shrink-0 forced-colors:bg-[ButtonBorder]",
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px"
    },
    color: {
      lighter: 'bg-neutral-100',
      light: 'bg-neutral-200',
      neutral: 'bg-neutral-300',
      dark: 'bg-neutral-500',
      darker: 'bg-neutral-700'
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
})

interface ExtendedSeparatorProps extends SeparatorProps {
  color?: 'lighter' | 'light' | 'neutral' | 'dark' | 'darker';
}

export function Separator({ className, ...props }: ExtendedSeparatorProps) {
  return (
    <SeparatorPrimitive
      {...props}
      className={separatorStyles({
        orientation: props.orientation,
        color: props.color,
        className: className
      })}
    />
  )
}

export type { SeparatorProps }
