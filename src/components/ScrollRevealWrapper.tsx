"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealWrapperProps extends React.ComponentPropsWithoutRef<"div"> {
  threshold?: number;
}

export default function ScrollRevealWrapper({
  children,
  threshold,
  className,
  ...props
}: ScrollRevealWrapperProps) {
  const { ref, isVisible } = useScrollReveal(threshold);

  return (
    <div
      ref={ref}
      className={`${className || ""} ${isVisible ? "is-revealed" : ""}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
