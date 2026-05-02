import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-orange-500 text-white shadow-xl shadow-orange-200 hover:scale-105 uppercase font-black rounded-2xl": variant === "primary",
            "bg-slate-900 text-white hover:bg-blue-600 uppercase font-black rounded-2xl": variant === "secondary",
            "bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all rounded-full font-bold uppercase": variant === "outline",
            "hover:bg-slate-200 text-slate-700 hover:text-slate-900 uppercase font-bold rounded-2xl": variant === "ghost",
            "h-10 px-6 text-sm": size === "sm",
            "h-14 px-8 text-lg": size === "md",
            "h-16 px-10 text-lg": size === "lg",
            "h-12 w-12 rounded-full": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
