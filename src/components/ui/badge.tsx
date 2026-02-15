import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

/* -----------------------------------------------------------------------------
 * Variants
 * ---------------------------------------------------------------------------*/

const BadgeVariants = cva(
  [
    "inline-flex items-center whitespace-nowrap",
    "rounded-md border px-2.5 py-0.5",
    "text-xs font-semibold transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    "hover-elevate",
  ],
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-xs",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-xs",
        outline:
          "border [border-color:var(--badge-outline)] shadow-xs",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/* -----------------------------------------------------------------------------
 * Props
 * ---------------------------------------------------------------------------*/

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof BadgeVariants> {}

/* -----------------------------------------------------------------------------
 * Component
 * ---------------------------------------------------------------------------*/

function Badge({
  className,
  variant,
  ...props
}: BadgeProps): React.JSX.Element {
  return (
    <span
      className={cn(BadgeVariants({ variant }), className)}
      {...props}
    />
  )
}

/* -----------------------------------------------------------------------------
 * Exports
 * ---------------------------------------------------------------------------*/

export { Badge, BadgeVariants }
