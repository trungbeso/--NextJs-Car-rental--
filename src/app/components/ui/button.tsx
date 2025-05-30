import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow cursor-pointer before:content-[''] before:absolute before:w-[150%] before:h-[150%] before:bg-black before:origin-bottom-left before:rotate-45 before:-translate-x-full before:translate-y-full before:transition-transform before:duration-300 before:ease-in-out hover:before:translate-x-0 hover:before:translate-y-0 after:content-[''] after:absolute after:w-[150%] after:h-[150%] after:bg-black after:origin-top-right after:rotate-45 after:translate-x-full after:-translate-y-full after:transition-transform after:duration-300 after:ease-in-out hover:after:translate-x-0 hover:after:translate-y-0 [&>span]:relative [&>span]:z-10 hover:text-white hover:font-semibold",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm cursor-pointer before:content-[''] before:absolute before:w-[150%] before:h-[150%] before:bg-black before:origin-bottom-left before:rotate-45 before:-translate-x-full before:translate-y-full before:transition-transform before:duration-300 before:ease-in-out hover:before:translate-x-0 hover:before:translate-y-0 after:content-[''] after:absolute after:w-[150%] after:h-[150%] after:bg-black after:origin-top-right after:rotate-45 after:translate-x-full after:-translate-y-full after:transition-transform after:duration-300 after:ease-in-out hover:after:translate-x-0 hover:after:translate-y-0 [&>span]:relative [&>span]:z-10 hover:text-white hover:font-semibold",
        outline:
          "border border-input bg-background shadow-sm cursor-pointer before:content-[''] before:absolute before:w-[150%] before:h-[150%] before:bg-black before:origin-bottom-left before:rotate-45 before:-translate-x-full before:translate-y-full before:transition-transform before:duration-300 before:ease-in-out hover:before:translate-x-0 hover:before:translate-y-0 after:content-[''] after:absolute after:w-[150%] after:h-[150%] after:bg-black after:origin-top-right after:rotate-45 after:translate-x-full after:-translate-y-full after:transition-transform after:duration-300 after:ease-in-out hover:after:translate-x-0 hover:after:translate-y-0 [&>span]:relative [&>span]:z-10 hover:text-white hover:font-semibold",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm cursor-pointer before:content-[''] before:absolute before:w-[150%] before:h-[150%] before:bg-black before:origin-bottom-left before:rotate-45 before:-translate-x-full before:translate-y-full before:transition-transform before:duration-300 before:ease-in-out hover:before:translate-x-0 hover:before:translate-y-0 after:content-[''] after:absolute after:w-[150%] after:h-[150%] after:bg-black after:origin-top-right after:rotate-45 after:translate-x-full after:-translate-y-full after:transition-transform after:duration-300 after:ease-in-out hover:after:translate-x-0 hover:after:translate-y-0 [&>span]:relative [&>span]:z-10 hover:text-white hover:font-semibold",
        ghost:
          "cursor-pointer before:content-[''] before:absolute before:w-[150%] before:h-[150%] before:bg-black before:origin-bottom-left before:rotate-45 before:-translate-x-full before:translate-y-full before:transition-transform before:duration-300 before:ease-in-out hover:before:translate-x-0 hover:before:translate-y-0 after:content-[''] after:absolute after:w-[150%] after:h-[150%] after:bg-black after:origin-top-right after:rotate-45 after:translate-x-full after:-translate-y-full after:transition-transform after:duration-300 after:ease-in-out hover:after:translate-x-0 hover:after:translate-y-0 [&>span]:relative [&>span]:z-10 hover:text-white hover:font-semibold",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span>{children}</span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };