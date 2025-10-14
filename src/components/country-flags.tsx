import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function TurkeyFlag({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={cn("w-6 h-auto rounded-sm", className)} {...props}>
      <rect width="900" height="600" fill="#e30a17"></rect>
      <circle cx="300" cy="300" r="150" fill="#fff"></circle>
      <circle cx="338" cy="300" r="120" fill="#e30a17"></circle>
      <path d="M433.32 300l-69.54 44.86 26.57-72.58-69.54-44.86h85.96L433.32 155l26.57 72.58h85.96z" fill="#fff"></path>
    </svg>
  );
}

export function LatviaFlag({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" className={cn("w-6 h-auto rounded-sm", className)} {...props}>
      <rect width="1200" height="600" fill="#9E3039"></rect>
      <rect y="240" width="1200" height="120" fill="#fff"></rect>
    </svg>
  );
}
