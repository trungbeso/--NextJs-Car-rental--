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
          "bg-primary text-primary-foreground shadow cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0 before:bg-black before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:h-full before:clip-path-[polygon(0_100%,0_100%,0_100%)] hover:before:clip-path-[polygon(0_100%,100%_0%,100%_100%)] after:content-[''] after:absolute after:top-0 after:right-0 after:w-0 after:h-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:h-full  after:clip-path-[polygon(100%_0%,100%_0%,100%_0%)] hover:after:clip-path-[polygon(0%_0%,100%_0%,0%_100%)] [&>span]:relative [&>span]:z-10 hover:text-white hover:font-semibold",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0 before:bg-black before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:h-full before:clip-path-[polygon(0_100%,0_100%,0_100%)] hover:before:clip-path-[polygon(0_100%,100%_0%,100%_100%)] after:content-[''] after:absolute after:top-0 after:right-0 after:w-0 after:h-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:h-full after:clip-path-[polygon(100%_0%,100%_0%,100%_0%)] hover:after:clip-path-[polygon(0%_0%,100%_0%,0%_100%)] [&>span]:relative [&>span]:z-10 hover:text-white hover:font-semibold",
        outline:
          "border border-input bg-background shadow-sm cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0 before:bg-black before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:h-full before:clip-path-[polygon(0_100%,0_100%,0_100%)] hover:before:clip-path-[polygon(0_100%,100%_0%,100%_100%)] after:content-[''] after:absolute after:top-0 after:right-0 after:w-0 after:h-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:h-full after:clip-path-[polygon(100%_0%,100%_0%,100%_0%)] hover:after:clip-path-[polygon(0%_0%,100%_0%,0%_100%)] [&>span]:relative [&>span]:z-10 hover:text-white hover:font-semibold",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0 before:bg-black before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:h-full before:clip-path-[polygon(0_100%,0_100%,0_100%)] hover:before:clip-path-[polygon(0_100%,100%_0%,100%_100%)] after:content-[''] after:absolute after:top-0 after:right-0 after:w-0 after:h-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:h-full after:clip-path-[polygon(100%_0%,100%_0%,100%_0%)] hover:after:clip-path-[polygon(0%_0%,100%_0%,0%_100%)] [&>span]:relative [&>span]:z-10 hover:text-white hover:font-semibold",
        ghost:
          "cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0 before:bg-black before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:h-full before:clip-path-[polygon(0_100%,0_100%,0_100%)] hover:before:clip-path-[polygon(0_100%,100%_0%,100%_100%)] after:content-[''] after:absolute after:top-0 after:right-0 after:w-0 after:h-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:h-full after:clip-path-[polygon(100%_0%,100%_0%,100%_0%)] hover:after:clip-path-[polygon(0%_0%,100%_0%,0%_100%)] [&>span]:relative [&>span]:z-10 hover:text-white hover:font-semibold",
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
